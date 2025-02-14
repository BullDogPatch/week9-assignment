import { notFound } from 'next/navigation';
import { fetchPostsByUsername, fetchUser } from '@/utils/api';
import { Posts, User } from '@/utils/types';
import Post from '@/components/Post';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

type Params = {
  params: Promise<{ username: string }>;
};

const UserPage = async ({ params }: Params) => {
  const { username } = await params;
  const user: User = await fetchUser(username);
  const { rows } = await fetchPostsByUsername(username);
  const posts: Posts = rows;
  if (!user) notFound();
  console.log(user);
  return (
    <div>
      <p>Username: {user?.username}</p>
      <div className='avatar'>
        <div className='w-24 rounded-full'>
          <img src={user?.profile_url} />
        </div>
      </div>
      <Box>
        <Stack spacing={3}>
          {posts.length === 0 ? (
            <p>No posts yet</p>
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default UserPage;
