import { deletePost } from '@/utils/actions';
import { Button } from './ui/button';

const DeletePostForm = ({ id }: { id: number }) => {
  return (
    <form action={deletePost}>
      <input type='hidden' name='id' value={id} />
      <Button className='mt-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transitionbg-red-500'>
        Delete
      </Button>
    </form>
  );
};

export default DeletePostForm;
