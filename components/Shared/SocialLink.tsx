import { DynamicIcon, IconName } from "lucide-react/dynamic";

type TBadge = {
	link: string;
	label: string;
	target?: string;
	icon?: IconName;
	className?: string;
};

const SocialLink = ({ link, label, target, icon = "linkedin", className, ...props }: TBadge) => {
	return (
		<a
			className="mt-4 flex h-8 w-8 shrink-0 rounded-full border border-secondary p-1.5 text-secondary transition-colors hover:bg-secondary hover:text-white"
			href={link}
			target={target}
			rel="noopener noreferrer"
			aria-label={label}
			{...props}
		>
			<DynamicIcon name={icon} className="size-full" aria-hidden="true" />
		</a>
	);
};
export default SocialLink;
