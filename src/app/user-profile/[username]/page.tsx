import { notFound } from 'next/navigation';
import { fetchPostsByUsername, fetchUser } from '@/utils/api';
import { User } from '@/utils/types';

type Params = {
  params: Promise<{ username: string }>;
};

const UserPage = async ({ params }: Params) => {
  const { username } = await params;
  const user: User = await fetchUser(username);
  const posts = await fetchPostsByUsername(username);
  console.log(posts);
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
    </div>
  );
};

export default UserPage;
