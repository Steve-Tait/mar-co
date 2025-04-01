import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.scss';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { GoogleTagManager } from '@next/third-parties/google';

import Layout from '@/components/Shared/Layout';
import StoryblokProvider from '@/components/StoryblokProvider';

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: {
    template: '%s | MAR-CO',
    default: 'MAR-CO',
  },
  openGraph: {
    images: '/logo.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <GoogleTagManager gtmId={process.env.GTM_ID || ''} />
        <body
          className={cn(
            'font-sans theme--dark flex min-h-screen flex-col bg-background text-foreground antialiased',
            openSans.variable,
            poppins.variable
          )}
        >
          <Layout>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
