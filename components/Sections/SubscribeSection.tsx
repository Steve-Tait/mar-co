import Container from "@/components/Shared/Container";
import Section from "../Shared/Section";
import { ArticlesSectionStoryblok } from "@/component-types-sb";
import Heading from "../Shared/Heading";
import RichText from "../Block/RichText";
import SubscribeForm from "../Shared/SubscribeForm";

const SubscribeSection = ({ blok }: ArticlesSectionStoryblok) => {
	const { heading, body } = blok;
	return (
		<Section removePadding className="py-12" blok={blok}>
			<Container className="grid items-center gap-x-8 gap-y-4 lg:grid-cols-2 xl:gap-x-16">
				<div className="flex flex-col gap-y-1 md:gap-y-2">
					{heading && <Heading level={3} heading={heading} />}
					{body && <RichText content={body} />}
				</div>
				<div>
					<SubscribeForm />
				</div>
			</Container>
		</Section>
	);
};

export default SubscribeSection;
