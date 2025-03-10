import {
  StoryblokRichText,
  MarkTypes,
  type StoryblokRichTextNode,
  StoryblokRichTextProps,
  useStoryblokRichTextResolver,
  convertAttributesInElement,
} from '@storyblok/react';

import {
  ComponentPropsWithoutRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react';
import Link from 'next/link';
import { RichtextStoryblok } from '@/component-types-sb';

interface RichTextProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'content'> {
  content: RichtextStoryblok;
}

const resolvers = {
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
    return node.attrs?.linktype === 'story' ? (
      <Link href={node.attrs?.href} target={node.attrs?.target}>
        {node.text}
      </Link>
    ) : (
      <a href={node.attrs?.href} target={node.attrs?.target}>
        {node.text}
      </a>
    );
  },
};

const RichText = ({ content, ...props }: RichTextProps) => {
  const { render } = useStoryblokRichTextResolver({
    resolvers,
  });

  const html = render(content as StoryblokRichTextNode<ReactNode>);
  const formattedHtml = convertAttributesInElement(html as React.ReactElement);

  return <div {...props}>{formattedHtml}</div>;
};
export default RichText;
