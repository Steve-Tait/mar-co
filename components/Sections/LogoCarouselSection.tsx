"use client";

import Container from "@/components/Shared/Container";
import Section from "../Shared/Section";
import SectionWrap from "../Shared/SectionWrap";
import { LogoCarouselSectionStoryblok } from "@/component-types-sb";
import ImageAutoScrollCarousel from "../Shared/ImageAutoScrollCarousel";

const LogoCarouselSection = ({ blok }: { blok: LogoCarouselSectionStoryblok }) => {
	const { eyebrow, heading, body, logos } = blok;

	return (
		<Section blok={blok}>
			<Container>
				<SectionWrap {...{ eyebrow, heading, body }}>{logos && <ImageAutoScrollCarousel images={logos} />}</SectionWrap>
			</Container>
		</Section>
	);
};

export default LogoCarouselSection;
