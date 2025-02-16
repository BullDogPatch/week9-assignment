'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className='bg-slate-950 text-white' type='submit'>
      {pending ? 'Submitting...' : text}
    </Button>
  );
};

export default SubmitButton;
