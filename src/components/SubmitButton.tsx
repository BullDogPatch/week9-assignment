'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return <button type='submit'>{pending ? 'Submitting...' : text}</button>;
};

export default SubmitButton;
