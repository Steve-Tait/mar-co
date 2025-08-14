import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.scss';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { GoogleTagManager } from '@next/third-parties/google';
import { Root as DialogRoot } from '@radix-ui/react-dialog';
import Layout from '@/components/Shared/Layout';
import StoryblokProvider from '@/components/StoryblokProvider';
import Script from 'next/script';
import Calendar from '@/components/Shared/Calendar';

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
        <head>
          <link
            rel='icon'
            href='/icon?<generated>'
            type='image/<generated>'
            sizes='<generated>'
          />
          <link
            rel='apple-touch-icon'
            href='/apple-icon?<generated>'
            type='image/<generated>'
            sizes='<generated>'
          />
          <link rel='icon' href='/favicon.ico' sizes='any' />
          <meta name='apple-mobile-web-app-title' content='Mar-co' />
          {process.env.VERCEL_ENV !== 'production' && (
            <meta
              name='google-site-verification'
              content='uDKbndwkUah4Kl_vA4wk2PcdTnLWDWxJQbs1lW7hZCY'
            />
          )}
        </head>
        <GoogleTagManager gtmId={process.env.GTM_ID || ''} />

        <body
          className={cn(
            'font-sans theme--dark flex min-h-screen flex-col bg-background text-foreground antialiased',
            openSans.variable,
            poppins.variable
          )}
        >
          <DialogRoot>
            <Layout>{children}</Layout>
            <Calendar />
          </DialogRoot>
          {process.env.VERCEL_ENV === 'production' && (
            <Script id='clarity-script' strategy='afterInteractive'>
              {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.CLARITY_PROJECT_ID}");
          `}
            </Script>
          )}
        </body>
      </html>
    </StoryblokProvider>
  );
}
