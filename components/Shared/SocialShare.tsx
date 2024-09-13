import { cn } from '@/lib/utils';
import { Copy, Facebook, Linkedin, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface IProps {
  className?: string;
  format?: 'contextualNav' | 'post';
}

const SocialShare: React.FC<IProps> = ({
  className,
  format = 'contextualNav',
}) => {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [encodedUrl, setEncodedUrl] = useState<string | null>(null);

  const iconClass = cn('w-6 h-6', format === 'post' && 'text-gold-700');
  const buttonClass = cn(
    'transition-color duration-300 bg-theme-surface-secondary hover:bg-theme-border-secondary',
    format === 'contextualNav' && 'shrink-0 py-2 px-3.5 rounded-full',
    format === 'post' &&
      'w-full p-3 rounded-sm flex items-center justify-center gap-x-2.5'
  );
  const WINDOW: string =
    'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=300, height=300';

  function openSocialShareTwitter(): void {
    const url = `http://twitter.com/share?url=${encodedUrl}`;
    window.open(url, 'targetWindow', WINDOW);
  }

  function openSocialShareLinkedin(): void {
    const url = `https://www.linkedin.com/share?url=${encodedUrl}`;
    window.open(url, 'targetWindow', WINDOW);
  }

  function openSocialShareFacebook(): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}/`;
    window.open(url, 'targetWindow', WINDOW);
  }

  function copyCurrentUrlToClipboard(): void {
    if (!currentUrl) return;
    window.navigator.clipboard.writeText(currentUrl);
  }

  const socials = [
    {
      name: 'Facebook',
      label: 'Share on Facebook',
      labelOnPost: 'Share',
      component: <Facebook className={iconClass} />,
      onClick: openSocialShareFacebook,
    },
    {
      name: 'LinkedIn',
      label: 'Share on LinkedIn',
      labelOnPost: 'Share',
      component: <Linkedin className={iconClass} />,
      onClick: openSocialShareLinkedin,
    },
    {
      name: 'X',
      label: 'Share on X',
      labelOnPost: 'Tweet',
      component: <X className={iconClass} />,
      onClick: openSocialShareTwitter,
    },
    {
      name: 'Copy',
      label: 'Copy link to clipboard',
      labelOnPost: 'Copy Link',
      component: <Copy className={iconClass} />,
      onClick: copyCurrentUrlToClipboard,
    },
  ];

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setEncodedUrl(encodeURIComponent(window.location.href));
  }, []);

  return (
    <div className={className}>
      {format === 'post' && (
        <hr className='border-theme-border-secondary mb-6 lg:mb-12' />
      )}

      <nav
        className={cn(
          'flex origin-center items-center gap-0.5 overflow-hidden',
          format === 'post' && 'grid grid-cols-2 gap-2 md:grid-cols-4'
        )}
      >
        {socials.map((social) => {
          return (
            <button
              key={social.name}
              aria-label={social.label}
              className={buttonClass}
              onClick={social.onClick}
            >
              {social.component}
              <span
                className={cn(
                  format === 'post'
                    ? 'body-text-small text-theme-text-link'
                    : 'sr-only'
                )}
              >
                {social.labelOnPost}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SocialShare;
