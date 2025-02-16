import { updatePost } from '@/utils/actions';
import { fetchPostById } from '@/utils/api';

type Params = {
  params: Promise<{ id: number }>;
};

const EditPostPage = async ({ params }: Params) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  return (
    <form action={updatePost} className='flex flex-col'>
      <input type='hidden' name='id' value={id} />
      <input type='text' name='title' defaultValue={post.title} />
      <input type='text' name='image' defaultValue={post.image} />
      <textarea
        name='content'
        defaultValue={post.description}
        className='resize-none'
      ></textarea>
      <button type='submit'>Save</button>
    </form>
  );
};

export default EditPostPage;
