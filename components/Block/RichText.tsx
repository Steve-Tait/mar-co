import { MarkTypes, type StoryblokRichTextNode, convertAttributesInElement } from "@storyblok/react";
import { richTextResolver } from "@storyblok/richtext";

import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import Link from "next/link";
import { RichtextStoryblok } from "@/component-types-sb";
import { cn } from "@/lib/utils";
import React from "react";

interface RichTextProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
	content: RichtextStoryblok | string;
	large?: boolean;
}

const resolvers = {
	[MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
		return node.attrs?.linktype === "story" ? (
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

const RichText = ({ content, className, large, ...props }: RichTextProps) => {
	const { render } = richTextResolver({
		resolvers,
		renderFn: React.createElement,
		keyedResolvers: true,
	});

	if (!content) return;
	if (typeof content === "string") {
		return (
			<div className={cn("prose max-w-prose", large && "prose--lg", className)} {...props}>
				{content}
			</div>
		);
	}

	const html = render(content as StoryblokRichTextNode<JSX.Element>);
	const formattedHtml = convertAttributesInElement(html as React.ReactElement);
	return (
		<div className={cn("prose max-w-prose", large && "prose--lg", className)} {...props}>
			{formattedHtml}
		</div>
	);
};
export default RichText;
