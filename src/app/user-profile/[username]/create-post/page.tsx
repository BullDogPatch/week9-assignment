import { createPost } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';

const CreatePostPage = async () => {
  const { userId } = await auth();
  return (
    <form action={createPost} className='flex flex-col'>
      <input type='hidden' name='clerk_id' value={userId ?? ''} />

      <input
        type='text'
        placeholder='What is on your mind?'
        name='title'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <textarea
        className='textarea textarea-bordered resize-none'
        placeholder='Write anything here.'
        name='description'
        required
      ></textarea>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default CreatePostPage;
