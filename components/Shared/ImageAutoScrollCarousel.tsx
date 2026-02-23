import { MultiassetStoryblok } from "@/component-types-sb";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { getImageDimensionsFromUrl } from "@/lib/utils";
import Image from "next/image";

export default function ImageAutoScrollCarousel({ images }: { images: MultiassetStoryblok }) {
	const imagesWithSize = images.map((image) => {
		const dimensions = getImageDimensionsFromUrl(image.filename);
		const scaleFactor = dimensions[0] / dimensions[1];
		return {
			width: dimensions[0] * scaleFactor,
			height: 48,
			filename: image.filename,
			alt: image.alt || image.title || "",
		};
	});

	return (
		<Carousel
			className="relative overflow-hidden"
			opts={{
				loop: true,
				slidesToScroll: "auto",
			}}
			hasAutoScroll
		>
			<CarouselContent className="gap-x-4">
				{imagesWithSize.map((image, index) => (
					<CarouselItem className="min-w-0 max-w-full shrink-0 grow-0 basis-auto" key={index}>
						<Image
							src={image.filename}
							alt={image.alt}
							width={Math.floor(image.width)}
							height={image.height}
							className="relative h-12 w-40 object-contain"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
