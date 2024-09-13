export interface ShapeProps {
  size?: number;
  growth?: number;
  edges?: number;
  seed?: string | null;
}
export interface SvgBlobProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'viewBox' | 'xmlns' | 'xmlnsXlink'
  > {
  shapeProps?: ShapeProps;
  image?: string;
}
export type Paths = {
  slug: string[];
};
export type MetaProps = {
  params: Paths;
  searchParams: { [key: string]: string | string[] | undefined };
};
export type TSubscribeResponse = {
  wasSuccessful: boolean;
  data?: any;
  error?: any;
};
export interface TSVGProps {
  className?: string;
}
