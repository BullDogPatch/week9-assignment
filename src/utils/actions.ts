'use server';

import { redirect } from 'next/navigation';
import { db } from './dbConnection';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';

export const createuser = async (formData: FormData) => {
  const id = formData.get('clerk_id');
  const firstName = formData.get('first_name');
  const lastName = formData.get('last_name');
  const username = formData.get('username');
  const src = formData.get('src');
  const location = formData.get('location');
  const bio = formData.get('bio');

  await db.query(
    `INSERT INTO users (first_name, last_name, username, profile_url, bio, location, clerk_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [firstName, lastName, username, src, bio, location, id]
  );
  redirect(`/user-profile/${username}`);
};

export const createPost = async (formData: FormData) => {
  const id = formData.get('clerk_id');
  const title = formData.get('title');
  const image = formData.get('image');
  const description = formData.get('description');

  const user = await db.query(
    `SELECT username FROM users WHERE clerk_id = $1`,
    [id]
  );

  if (!user.rows[0]) throw new Error('User not found');

  const username = user.rows[0].username;
  await db.query(
    `INSERT INTO user_posts (user_id, title, image, description)
VALUES (
  (SELECT id FROM users WHERE clerk_id = $1),
  $2,
  $3,
  $4
)
RETURNING *`,
    [id, title, image, description]
  );
  revalidatePath(`/user-profile/${username}`);
  redirect(`/user-profile/${username}`);
};

export const updatePost = async (
  postId: number,
  title: string,
  description: string
) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('Unauthorized: No user ID found.');
  }

  const result = await db.query(
    `
    UPDATE user_posts
    SET title = $1, description = $2
    WHERE id = $3 AND user_id = (SELECT id FROM users WHERE clerk_id = $4)
    RETURNING *
    `,
    [title, description, postId, userId]
  );

  if (result.rowCount === 0) {
    throw new Error('Unauthorized: Post not found or user mismatch.');
  }

  return result.rows[0];
};
