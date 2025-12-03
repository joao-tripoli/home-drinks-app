import Header from '@/components/ui/header';
import Providers from '@/lib/providers';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Home Drinks - Your Personal Drink Library',
  description:
    'Create, manage, and share your personal drink library. Perfect for hosting parties with custom drink menus your guests can order from.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${montserrat.className} dark`}>
        <body className="antialiased">
          <Providers>
            <Header />
            <div className="container px-4 sm:mx-auto mt-8">{children}</div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
