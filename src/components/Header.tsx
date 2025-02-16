import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-6 border-b-2 border-blue-600 mb-7'>
      <Link href='/'>
        <h1 className='font-bold text-2xl'>ShitPoster</h1>
      </Link>
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
