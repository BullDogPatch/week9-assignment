import { formatDate } from '@/utils/dateFormatter';

const Post = ({
  post,
}: {
  post: {
    username: string;
    title: string;
    image: string;
    description: string;
    created_at: string;
  };
}) => {
  return (
    <li className='flex items-center flex-col border-2 border-red-400 rounded-md'>
      <p>{post.username}</p>
      <p>{post.title}</p>
      <img src={post.image} className='h-[100px] w-[100px]' />
      <p>{post.description}</p>
      <p>{formatDate(post.created_at)}</p>
    </li>
  );
};

export default Post;
