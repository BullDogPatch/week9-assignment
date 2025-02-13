import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className='flex justify-between p-6'>
      <h1>Social</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
