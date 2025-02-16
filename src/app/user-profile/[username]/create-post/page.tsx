import SubmitButton from '@/components/SubmitButton';
import { createPost } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';

const CreatePostPage = async () => {
  const user = await currentUser();
  return (
    <>
      <p className='mb-6 text-lg font-semibold'>Create a post</p>
      <form action={createPost} className='flex flex-col'>
        <input type='hidden' name='clerk_id' value={user?.id} />

        <input
          type='text'
          placeholder='What is on your mind?'
          name='title'
          className='input input-bordered w-full max-w-xs mb-4'
          required
        />
        <input
          type='text'
          placeholder='www.example.com'
          name='image'
          className='input input-bordered w-full max-w-xs mb-4'
          required
        />
        <textarea
          className='textarea textarea-bordered resize-none mb-4'
          placeholder='Write anything here.'
          name='description'
          required
        ></textarea>
        <SubmitButton text='Submit' />
      </form>
    </>
  );
};

export default CreatePostPage;
