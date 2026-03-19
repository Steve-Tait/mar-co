import Link from "next/link";
import { RichtextStoryblok } from "@/component-types-sb";
import { cn } from "@/lib/utils";
import { Mark } from "@tiptap/core";
import { asTag, richTextResolver } from "@storyblok/react";
import { ComponentPropsWithoutRef } from "react";

interface RichTextProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
	content: RichtextStoryblok | string;
	large?: boolean;
}

const CustomLink = Mark.create({
	name: "link",
	renderHTML({ HTMLAttributes }) {
		console.log("Rendering link with attributes:", HTMLAttributes);
		if (HTMLAttributes.linktype === "story") {
			return [asTag(Link), { href: HTMLAttributes.href }, 0];
		}
		return ["a", { href: HTMLAttributes.href, target: HTMLAttributes.target }, 0];
	},
});

const RichText = ({ content, className, large, ...props }: RichTextProps) => {
	if (!content) return;
	if (typeof content === "string") {
		return (
			<div className={cn("prose max-w-prose", large && "prose--lg", className)} {...props}>
				{content}
			</div>
		);
	}

	const html = richTextResolver({
		tiptapExtensions: { link: CustomLink },
		keyedResolvers: true,
	}).render(content) as TrustedHTML;
	return <div className={cn("prose max-w-prose", large && "prose--lg", className)} {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};
export default RichText;
