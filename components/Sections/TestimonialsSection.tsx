"use client";
import { TestimonialStoryblok, TestimonialsSectionStoryblok } from "@/component-types-sb";
import Container from "@/components/Shared/Container";
import Section from "../Shared/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

import Testimonial from "../Block/Testimonial";
import SectionWrap from "../Shared/SectionWrap";
import { StoryblokStory } from "storyblok-generate-ts";

type TTestimonialsSectionWithRelations = TestimonialsSectionStoryblok & {
	testimonials: StoryblokStory<TestimonialStoryblok>[];
};

const TestimonialsSection = ({ blok }: { blok: TTestimonialsSectionWithRelations }) => {
	const { eyebrow, heading, body, testimonials } = blok;
	if (!testimonials || !testimonials.length) return;
	return (
		<Section className="relative overflow-hidden" blok={blok}>
			<div className="pointer-events-none absolute bottom-0 left-1/2 z-[-1] aspect-square h-[150%] -translate-x-1/2 translate-y-3/4 rounded-full bg-primary" />
			<Container className="relative">
				<SectionWrap className="text-center" {...{ eyebrow, heading, body }}>
					{testimonials.length > 1 ? (
						<div>
							<Carousel opts={{ containScroll: false }} className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
								<CarouselPrevious />
								<div className="mask-edges -order-1 min-w-0 sm:order-none" style={{ "--fade": "2rem" } as React.CSSProperties}>
									<CarouselContent>
										{testimonials.map((testimonial: StoryblokStory<TestimonialStoryblok>, index) => (
											<CarouselItem className="basis-1/2" key={index}>
												<Testimonial className="h-full" blok={testimonial.content} key={testimonial.uuid} />
											</CarouselItem>
										))}
									</CarouselContent>
								</div>
								<CarouselNext />
							</Carousel>
						</div>
					) : (
						<>
							{testimonials.map((testimonial: StoryblokStory<TestimonialStoryblok>) => (
								<Testimonial className="h-full" blok={testimonial.content} key={testimonial.uuid} />
							))}
						</>
					)}
				</SectionWrap>
			</Container>
		</Section>
	);
};

export default TestimonialsSection;
