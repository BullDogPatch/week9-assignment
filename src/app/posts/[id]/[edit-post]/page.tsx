import SubmitButton from '@/components/SubmitButton';
import { updatePost } from '@/utils/actions';
import { fetchPostById } from '@/utils/api';
import Link from 'next/link';

type Params = {
  params: Promise<{ id: number }>;
};

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const post = await fetchPostById(id);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `Edit post id ${id}`,
    description: `Edit post.`,
  };
}

const EditPostPage = async ({ params }: Params) => {
  const { id } = await params;
  const post = await fetchPostById(id);

  return (
    <form action={updatePost} className='flex flex-col'>
      <Link
        href={`/posts`}
        className='text-blue-500 hover:underline mb-4 block'
      >
        ← Back
      </Link>
      <input type='hidden' name='id' value={id} />
      <input
        type='text'
        name='title'
        defaultValue={post.title}
        className='input input-bordered w-full max-w-xs mb-4'
      />
      <input
        type='text'
        name='image'
        defaultValue={post.image}
        className='input input-bordered w-full max-w-xs mb-4'
      />
      <textarea
        name='content'
        defaultValue={post.description}
        className='input input-bordered w-full max-w-xs mb-4 resize-none'
      ></textarea>
      <SubmitButton text='Submit' />
    </form>
  );
};

export default EditPostPage;
