import { RichtextStoryblok } from "@/component-types-sb";
import { cn } from "@/lib/utils";
import { richTextResolver } from "@storyblok/react";
import { ComponentPropsWithoutRef } from "react";

interface RichTextProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
	content: RichtextStoryblok | string;
	large?: boolean;
}

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
		keyedResolvers: true,
	}).render(content) as TrustedHTML;
	return <div className={cn("prose max-w-prose", large && "prose--lg", className)} {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};
export default RichText;
