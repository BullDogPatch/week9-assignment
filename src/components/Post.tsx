const Post = ({
  post,
}: {
  post: { title: string; image: string; description: string };
}) => {
  return (
    <li className='flex items-center flex-col border-2 border-red-400 rounded-md'>
      <p>{post.title}</p>
      <img src={post.image} className='h-[100px] w-[100px]' />
      <p>{post.description}</p>
    </li>
  );
};

export default Post;
