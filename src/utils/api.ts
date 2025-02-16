import { db } from './dbConnection';

export const fetchUser = async (username: string) => {
  const user = await db.query(
    `SELECT * FROM users WHERE clerk_id = (SELECT clerk_id FROM users WHERE username = $1)`,
    [username]
  );
  return user.rows[0];
};
// look in users table for specific clerk_id and that user id will come from clerk object, if it finds it in table then look for  username value in that table, and if it finds one that will be the param in dynamic route

export const fetchPostsByUsername = async (username: string) => {
  const posts = await db.query(
    ` SELECT * 
    FROM user_posts 
    WHERE user_id = (SELECT id FROM users WHERE username = $1)
    ORDER BY created_at DESC
    `,
    [username]
  );

  return posts.rows;
};

export const fetchPosts = async () => {
  const posts = await db.query(`
    SELECT 
      up.id, 
      up.title, 
      up.description, 
      up.image,
      up.likes, 
      up.created_at, 
      u.username,
      u.clerk_id -- Add this line
    FROM user_posts up
    JOIN users u ON up.user_id = u.id
  `);

  return posts.rows;
};

export const fetchPostById = async (postId: number) => {
  const result = await db.query(
    `
    SELECT title, description, image
    FROM user_posts
    WHERE id = $1
    `,
    [postId]
  );

  if (result.rowCount === 0) {
    throw new Error('Post not found');
  }

  return result.rows[0];
};
