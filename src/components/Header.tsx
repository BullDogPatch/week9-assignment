import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='flex justify-between p-6'>
      <h1>ShitPoster</h1>
      <div>
        <SignedOut>
          <SignInButton>
            <Button className='m-2'>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button className='m-2'>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
