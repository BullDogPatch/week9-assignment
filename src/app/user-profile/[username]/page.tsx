import { notFound } from 'next/navigation';
import { fetchPostsByUsername, fetchUser } from '@/utils/api';
import { Posts, User } from '@/utils/types';
import Post from '@/components/Post';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

type Params = {
  params: Promise<{ username: string }>;
};

const UserPage = async ({ params }: Params) => {
  const { username } = await params;
  const user: User = await fetchUser(username);
  const posts: Posts = await fetchPostsByUsername(username);

  if (!user) notFound();

  return (
    <div className='w-2/3 md:w-3/4'>
      <div className='flex flex-col items-center'>
        <p className='font-bold text-gray-600'>
          {user?.first_name} {user.last_name}
        </p>
        <div className='avatar m-4'>
          <div className='w-36 rounded-full'>
            <img src={user?.profile_url} />
          </div>
        </div>
        <p>bio: {user.bio}</p>
        <p>from: {user.location}</p>
      </div>
      <ul className='mt-4'>
        {posts.length === 0 ? (
          <div className='text-center'>
            <p>You have no posts yet</p>
            <Link
              href={`${username}/create-post`}
              className='m-3 p-2 flex items-center rounded-xl hover:bg-slate-700'
            >
              <FaPlus className='mr-1' />
              <span>Create</span>
            </Link>
          </div>
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </ul>
    </div>
  );
};

export default UserPage;
