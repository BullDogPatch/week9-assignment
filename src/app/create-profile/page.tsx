import SubmitButton from '@/components/SubmitButton';
import { createuser } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ShitPoster - Create profile',
  description: 'Create Profile',
};

const CreateProfilePage = async () => {
  const user = await currentUser();
  return (
    <form action={createuser} className='flex flex-col'>
      <input type='hidden' name='clerk_id' value={user?.id} />
      <input
        type='text'
        placeholder='first name'
        name='first_name'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <input
        type='text'
        placeholder='last name'
        name='last_name'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <input
        type='text'
        placeholder='username'
        name='username'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <input
        type='text'
        placeholder='profile pic'
        name='src'
        className='input input-bordered w-full max-w-xs'
      />
      <input
        type='text'
        placeholder='location'
        name='location'
        className='input input-bordered w-full max-w-xs'
        required
      />
      <textarea
        className='textarea textarea-bordered resize-none'
        placeholder='Bio'
        name='bio'
        required
      ></textarea>
      <SubmitButton text='Submit' />
    </form>
  );
};

export default CreateProfilePage;
