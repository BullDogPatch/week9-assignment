const Post = ({ post }: { post: { title: string; description: string } }) => {
  return (
    <li className='border-2 border-red-400'>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </li>
  );
};

export default Post;
