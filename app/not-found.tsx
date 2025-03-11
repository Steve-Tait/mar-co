import Section from '@/components/Shared/Section';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Section blok={{ theme: 'dark' }}>
      <div className='dark flex grow flex-col items-center justify-center bg-primary py-10 text-primary-foreground'>
        <h1>Page not found</h1>
        <Link className='btn btn--pink mt-6' href={'/'}>
          Back to home
        </Link>
      </div>
    </Section>
  );
}
