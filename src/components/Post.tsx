import { formatDate } from '@/utils/dateFormatter';
import { UserPost } from '@/utils/types';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

const Post = async ({ post }: { post: UserPost }) => {
  const user = await currentUser();
  const canEdit = user && post.clerk_id === user.id;

  return (
    <li className='flex items-center flex-col border-2 border-red-400 rounded-md'>
      <p>{post.username}</p>
      <p>{post.title}</p>
      <img src={post.image} className='h-[100px] w-[100px]' />
      <p>{post.description}</p>
      <p>{formatDate(post.created_at)}</p>
      {canEdit && <Link href={`/posts/${[post.id]}/edit-post`}>Edit</Link>}
    </li>
  );
};

export default Post;
