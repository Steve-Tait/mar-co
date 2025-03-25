'use client';

import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import { useLenis } from './SmoothScroller';
import { AnimatePresence, motion } from 'framer-motion';
import Container from './Container';
import RichText from '../Block/RichText';
import { CookieConsentStoryblok } from '@/component-types-sb';
import { isRichTextPopulated } from '@/lib/utils';

export default function CookieConsentBanner({
  blok,
}: {
  blok: CookieConsentStoryblok;
}) {
  console.log('CookieConsentBanner', blok);
  const { message } = blok || {};
  const [showBanner, setShowBanner] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    showBanner ? lenis.stop() : lenis.start();
  }, [showBanner, lenis]);

  useEffect(() => {
    const consentCookie = cookie.get('cookieConsent');

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'accepted', { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'rejected', { expires: 365 });
  };
  if (!showBanner) return null;
  return (
    <AnimatePresence>
      <motion.div
        key='backdrop'
        className='pointer-events-none fixed inset-0 z-50 bg-black/10 backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        key='banner'
        className='fixed inset-x-0 bottom-0 z-50 bg-background p-4 text-center text-foreground'
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
      >
        <Container className='flex flex-col items-center gap-y-4'>
          {message && isRichTextPopulated(message) && (
            <RichText content={message} />
          )}
          <div className='flex justify-center gap-2'>
            <button className='btn btn--primary' onClick={handleAccept}>
              Accept
            </button>
            <button className='btn btn--secondary' onClick={handleReject}>
              Reject
            </button>
          </div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}
