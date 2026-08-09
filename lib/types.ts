export interface ShapeProps {
	size?: number;
	growth?: number;
	edges?: number;
	seed?: string | null;
}
export interface SvgBlobProps extends Omit<React.SVGAttributes<SVGSVGElement>, "viewBox" | "xmlns" | "xmlnsXlink"> {
	shapeProps?: ShapeProps;
	image?: string;
}

export type Paths = {
	slug: string[];
};

export type MetaProps = {
	params: Promise<Paths>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export type TFieldErrors = Record<string, { _errors: string[] } | undefined>;

export type TSubscribeResponse<TFields = Record<string, unknown>> =
	| { wasSuccessful: true; data: unknown; fields: TFields }
	| { wasSuccessful: false; error: string; fieldErrors?: TFieldErrors; submittedValues?: Record<string, string> };
export interface TSVGProps {
	className?: string;
}
