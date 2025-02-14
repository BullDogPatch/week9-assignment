import { List } from '@mui/material';

const Post = ({ post }: { post: { title: string; description: string } }) => {
  return (
    <List className=' border-2 border-red-400 rounded-md'>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </List>
  );
};

export default Post;
