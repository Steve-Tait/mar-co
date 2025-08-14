import {
  Portal,
  Title,
  Description,
  Content,
  Overlay,
  Close,
} from '@radix-ui/react-dialog';
import Heading from './Heading';

export default function Calendar() {
  return (
    <Portal>
      <Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 z-30 bg-primary/50 backdrop-blur-md' />
      <Content className='theme--light data-[state=open]:animate-contentShow max-w-200 fixed left-1/2 top-1/2 z-30 flex h-[85vh] w-[90vw] flex-col overflow-hidden rounded-xl bg-background p-6 text-center text-foreground focus:outline-none md:p-10'>
        <Close asChild>
          <button
            className='absolute right-3 top-3 size-6 cursor-pointer appearance-none items-center justify-center rounded-full border border-transparent transition-colors hover:border-current focus:outline-none'
            aria-label='Close'
          >
            &times;
          </button>
        </Close>
        <div className='mb-8 flex flex-col items-center gap-y-4'>
          <Title asChild>
            <Heading heading='Book a Consultation' level={2} />
          </Title>
          <Description>
            Book a free 30-minute consultation with MAR-CO Digital
          </Description>
        </div>
        <iframe
          width='100%'
          className='grow'
          src='https://meet.brevo.com/loredana-principessa/borderless?l=mar-codigital'
        ></iframe>
      </Content>
    </Portal>
  );
}
