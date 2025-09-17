import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
