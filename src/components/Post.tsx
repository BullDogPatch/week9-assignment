import { formatDate } from '@/utils/dateFormatter';
import { UserPost } from '@/utils/types';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import DeletePostForm from './DeletePostForm';

const Post = async ({ post }: { post: UserPost }) => {
  const user = await currentUser();
  const canEditOrDelete = user && post.clerk_id === user.id;

  return (
    <li className='flex flex-col items-center border-2 border-gray-700 rounded-md p-4 shadow-md bg-gray-800 text-white space-y-3 w-full max-w-md mx-auto'>
      <Link
        href={`/user-profile/${post.username}`}
        className='text-xl font-semibold hover:underline'
      >
        {post.username}
      </Link>
      <h3 className='text-lg font-bold'>{post.title}</h3>
      <img
        src={post.image}
        className='h-40 w-40 object-cover rounded-md'
        alt='Post image'
      />
      <p className='text-sm text-gray-300'>{post.description}</p>
      <p className='text-xs text-gray-500'>{formatDate(post.created_at)}</p>
      {canEditOrDelete && (
        <div className='flex items-center'>
          <Link
            href={`/posts/${post.id}/edit-post`}
            className='mt-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
          >
            Edit
          </Link>
          <DeletePostForm id={post.id} />
        </div>
      )}
    </li>
  );
};

export default Post;
