import Post from '@/components/Post';
import { fetchPosts } from '@/utils/api';
import { Posts } from '@/utils/types';

const PostsPage = async () => {
  const posts: Posts = await fetchPosts();
  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
