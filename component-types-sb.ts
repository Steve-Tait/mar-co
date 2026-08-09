// Compatibility shim: re-exports the Storyblok-CLI-generated types under this
// project's existing `XStoryblok` naming convention so the ~65 files importing
// from "@/component-types-sb" don't need to change. Regenerate the underlying
// types with `pnpm generate-sb-types`; this file only needs updating if a new
// component is added and referenced elsewhere by its `Storyblok`-suffixed name.
//
// The generated interfaces type unknown/undeclared fields as `[k: string]:
// unknown`. The codebase relies in several places on more permissive access
// to blok fields (e.g. components receiving `blok` via `@storyblok/react`'s
// runtime prop injection, which isn't reflected in these content types), so
// `Loose` widens that catch-all back to `any` to match the previous
// `storyblok-generate-ts` output's behaviour.
import type * as SB from "./.storyblok/types/271647/storyblok-components";

type Loose<T> = T & { [key: string]: any };

export type AnimatedWordStoryblok = Loose<SB.AnimatedWord>;
export type AnimatedWordsStoryblok = Loose<SB.AnimatedWords>;
export type AnimatedWordsSectionStoryblok = Loose<SB.AnimatedWordsSection>;
export type ArticleStoryblok = Loose<SB.Article>;
export type ArticleOverviewStoryblok = Loose<SB.ArticleOverview>;
export type ArticlesSectionStoryblok = Loose<SB.ArticlesSection>;
export type AuthorStoryblok = Loose<SB.Author>;
export type BannerWysiwygStoryblok = Loose<SB.BannerWysiwyg>;
export type ButtonStoryblok = Loose<SB.Button>;
export type CaseStudiesSectionStoryblok = Loose<SB.CaseStudiesSection>;
export type CaseStudyStoryblok = Loose<SB.CaseStudy>;
export type CaseStudyOverviewStoryblok = Loose<SB.CaseStudyOverview>;
export type CategoryStoryblok = Loose<SB.Category>;
export type CategoryOverviewStoryblok = Loose<SB.CategoryOverview>;
export type ChecklistSectionStoryblok = Loose<SB.ChecklistSection>;
export type ColouredContainerStoryblok = Loose<SB.ColouredContainer>;
export type ColouredContainerSectionStoryblok = Loose<SB.ColouredContainerSection>;
export type ConfigStoryblok = Loose<SB.Config>;
export type ContactStoryblok = Loose<SB.Contact>;
export type ContactSectionStoryblok = Loose<SB.ContactSection>;
export type CookieConsentStoryblok = Loose<SB.CookieConsent>;
export type FaqStoryblok = Loose<SB.Faq>;
export type FaqsSectionStoryblok = Loose<SB.FaqsSection>;
export type FeatureSectionStoryblok = Loose<SB.FeatureSection>;
export type FooterStoryblok = Loose<SB.Footer>;
export type FullWidthImageSectionStoryblok = Loose<SB.FullWidthImageSection>;
export type GalleryWysiwygStoryblok = Loose<SB.GalleryWysiwyg>;
export type HeaderStoryblok = Loose<SB.Header>;
export type HomepageStoryblok = Loose<SB.Homepage>;
export type ImageSectionStoryblok = Loose<SB.ImageSection>;
export type ImageWysiwygStoryblok = Loose<SB.ImageWysiwyg>;
export type IndustryStoryblok = Loose<SB.Industry>;
export type IndustryOverviewStoryblok = Loose<SB.IndustryOverview>;
export type IntroSectionStoryblok = Loose<SB.IntroSection>;
export type KeyFeaturesSectionStoryblok = Loose<SB.KeyFeaturesSection>;
export type KeyPointStoryblok = Loose<SB.KeyPoint>;
export type LinkStoryblok = Loose<SB.Link>;
export type ListItemStoryblok = Loose<SB.ListItem>;
export type LogoCarouselSectionStoryblok = Loose<SB.LogoCarouselSection>;
export type LogosSectionStoryblok = Loose<SB.LogosSection>;
export type MenuLinkStoryblok = Loose<SB.MenuLink>;
export type MenuSectionStoryblok = Loose<SB.MenuSection>;
export type PageStoryblok = Loose<SB.Page>;
export type StatStoryblok = Loose<SB.Stat>;
export type StatsSectionStoryblok = Loose<SB.StatsSection>;
export type SubscribeSectionStoryblok = Loose<SB.SubscribeSection>;
export type TestimonialStoryblok = Loose<SB.Testimonial>;
export type TestimonialWysiwygStoryblok = Loose<SB.TestimonialWysiwyg>;
export type TestimonialsSectionStoryblok = Loose<SB.TestimonialsSection>;
export type TextAndImageSectionStoryblok = Loose<SB.TextAndImageSection>;
export type TextOverImageSectionStoryblok = Loose<SB.TextOverImageSection>;
export type TextSectionStoryblok = Loose<SB.TextSection>;
export type TextWysiwygStoryblok = Loose<SB.TextWysiwyg>;
export type TiktokStoryblok = Loose<SB.Tiktok>;
export type TiktokSectionStoryblok = Loose<SB.TiktokSection>;
export type VideoWysiwygStoryblok = Loose<SB.VideoWysiwyg>;

export type {
	StoryblokAsset as AssetStoryblok,
	StoryblokMultiasset as MultiassetStoryblok,
	StoryblokMultilink as MultilinkStoryblok,
	StoryblokRichtext as RichtextStoryblok,
} from "./.storyblok/types/storyblok";
