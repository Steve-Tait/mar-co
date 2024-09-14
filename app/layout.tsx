import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';

import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

import Layout from '@/components/Shared/Layout';
import { resolveRelations } from '@/lib/consts';
import { COMPONENTS } from '@/lib/components';
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

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: COMPONENTS,
});

const bridgeOptions = {
  resolveRelations: resolveRelations,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body
          className={cn(
            'font-sans flex min-h-screen flex-col bg-primary text-primary-foreground antialiased',
            openSans.variable,
            poppins.variable
          )}
        >
          <Layout>{children}</Layout>
        </body>
        {/* <StoryblokBridgeLoader options={bridgeOptions} /> */}
      </html>
    </StoryblokProvider>
  );
}
