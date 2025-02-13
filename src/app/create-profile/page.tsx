import { auth, currentUser } from '@clerk/nextjs/server';

const CreateProfilePage = async () => {
  const { userId } = await auth();
  console.log(userId);
  return <div>CreateProfilePage</div>;
};

export default CreateProfilePage;
