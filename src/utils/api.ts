import { db } from './dbConnection';

export const fetchUser = async (username: string) => {
  const user = await db.query(
    `SELECT * FROM users WHERE clerk_id = (SELECT clerk_id FROM users WHERE username = $1)`,
    [username]
  );
  return user.rows[0];
};
// look in users table for specific clerk_id and that user id will come from clerk object, if it finds it in table then look for  username value in that table, and if it finds one that will be the param in dynamic route
