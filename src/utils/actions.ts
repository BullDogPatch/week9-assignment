'use server';

import { redirect } from 'next/navigation';
import { db } from './dbConnection';

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
  redirect(`user/${username}`);
};
