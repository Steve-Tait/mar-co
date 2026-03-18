import { storyblokEditable } from "@storyblok/react/rsc";
import Wysiwyg from "../Shared/Wysiwyg";
import ArticlesGrid from "../Shared/ArticlesGrid";
import Section from "../Shared/Section";
import Container from "../Shared/Container";
import { Suspense } from "react";
import SkeletonGrid from "../Shared/SkeletonGrid";
import SectionWrap from "../Shared/SectionWrap";
import { ArticleStoryblok, CategoryStoryblok } from "@/component-types-sb";
import SectionBuilder from "../Shared/SectionBuilder";
import LayoutScaler from "../Shared/LayoutScaler";
import HeroSecondary from "../Shared/HeroSecondary";
import { get } from "http";
import { getArticles } from "@/lib/storyblok";

type TArticleStoryblokWithRelations = ArticleStoryblok & {
	categories: CategoryStoryblok[];
	first_published_at: Date;
};

const Article = async ({ blok, id, first_published_at }: TArticleStoryblokWithRelations) => {
	const date = first_published_at
		? new Date(first_published_at).toLocaleString("default", {
				month: "long",
				year: "numeric",
			})
		: "";
	const { title, image, excerpt, wysiwyg, body, categories, author } = blok;
	const categoryIds = categories?.map((category: CategoryStoryblok) => category?.uuid) || [];

	const relatedArticles = await getArticles(categoryIds, 3, id.toString());
	return (
		<div {...storyblokEditable(blok)}>
			<LayoutScaler>
				<HeroSecondary {...{ title, excerpt, image, categories, date }} />
				<Wysiwyg wysiwyg={wysiwyg} author={author?.content} />
				<SectionBuilder body={body} />
				{relatedArticles?.length ? (
					<Section blok={blok}>
						<Container>
							<SectionWrap heading="Related articles">
								<Suspense fallback={<SkeletonGrid tiles={6} />}>
									<ArticlesGrid limit={3} articles={relatedArticles} />
								</Suspense>
							</SectionWrap>
						</Container>
					</Section>
				) : null}
			</LayoutScaler>
		</div>
	);
};

export default Article;
