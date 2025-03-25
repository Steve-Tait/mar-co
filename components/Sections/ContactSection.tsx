import { ContactSectionStoryblok } from '@/component-types-sb';
import Container from '@/components/Shared/Container';
import Section from '../Shared/Section';
import SectionWrap from '../Shared/SectionWrap';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = ({ blok }: { blok: ContactSectionStoryblok }) => {
  const { eyebrow, heading, phone, email, linkedin, address } = blok;
  return (
    <Section blok={blok}>
      <Container className='max-w-5xl'>
        <SectionWrap className='text-center' {...{ eyebrow, heading }}>
          <div className='grid grid-cols-2 gap-8 md:items-start lg:grid-cols-4'>
            {phone && (
              <a
                className='group/contact col-span-1 flex flex-col items-center gap-y-4'
                href={`tel:${phone.replace(/\s/g, '')}`}
              >
                <span className='size-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors group-hover/contact:bg-secondary group-hover/contact:text-white lg:size-12 lg:p-2.5'>
                  <Phone className='size-full' />
                </span>
                <span className='flex flex-col gap-y-1'>
                  <h6>By phone</h6>
                  {phone}
                </span>
              </a>
            )}
            {email?.email && (
              <a
                className='group/contact col-span-1 flex flex-col items-center gap-y-4'
                href={`mailto:${email.email}`}
              >
                <span className='size-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors group-hover/contact:bg-secondary group-hover/contact:text-white lg:size-12 lg:p-2.5'>
                  <Mail className='size-full' />
                </span>
                <span className='flex flex-col gap-y-1'>
                  <h6>By email</h6>
                  {email.email}
                </span>
              </a>
            )}
            {linkedin?.url && (
              <a
                className='group/contact col-span-1 flex flex-col items-center gap-y-4'
                href={linkedin.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='size-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors group-hover/contact:bg-secondary group-hover/contact:text-white lg:size-12 lg:p-2.5'>
                  <Linkedin className='size-full' />
                </span>
                <span className='flex flex-col gap-y-1'>
                  <h6>On LinkedIn</h6>
                  mar-co.digital
                </span>
              </a>
            )}
            {address && (
              <div className='group/contact col-span-1 flex flex-col items-center gap-y-4'>
                <span className='size-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors group-hover/contact:bg-secondary group-hover/contact:text-white lg:size-12 lg:p-2.5'>
                  <MapPin className='size-full' />
                </span>
                <span className='flex flex-col gap-y-1 whitespace-pre-wrap'>
                  <h6>In-person:</h6>
                  {address}
                </span>
              </div>
            )}
          </div>
        </SectionWrap>
      </Container>
    </Section>
  );
};

export default ContactSection;
