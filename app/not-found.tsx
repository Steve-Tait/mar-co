import Container from '@/components/Shared/Container';
import Heading from '@/components/Shared/Heading';
import Section from '@/components/Shared/Section';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Section blok={{ theme: 'dark' }}>
      <Container className='flex flex-col items-center justify-center gap-y-10 py-10 text-center sm:py-20'>
        <Heading level={1} heading='Sorry, this page does not exist' />
        <Link className='btn btn--primary' href={'/'}>
          Back to home
        </Link>
      </Container>
    </Section>
  );
}
