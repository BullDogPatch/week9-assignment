import { fetchUser } from '@/utils/api';

type Params = {
  params: Promise<{ username: string }>;
};

const UserPage = async ({ params }: Params) => {
  const { username } = await params;
  const user = await fetchUser(username);
  console.log(user);
  return (
    <div>
      <p>Username: {user?.username}</p>
    </div>
  );
};

export default UserPage;
