"use client";

import React, { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
import Lenis from "@studio-freight/lenis";

// Custom hook for Lenis
export const useLenis = (callback?: (lenis: Lenis) => void, deps: React.DependencyList = []) => {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		if (lenisRef.current && callback) {
			callback(lenisRef.current);
		}
	}, deps);

	return lenisRef.current;
};

import useWindowDimensions from "@/lib/hooks/useWindowDimension";
import { cn } from "@/lib/utils";

type IProps = {
	children?: React.ReactNode;
	root?: boolean;
	className?: string;
	style?: React.CSSProperties;
	options?: {
		lerp?: number;
		autoResize?: boolean;
		[key: string]: any;
	};
};

type Ref = Lenis;

const SmoothScroller = forwardRef<Ref, IProps>(({ children, root = false, className, options = {}, ...props }, ref) => {
	const { width } = useWindowDimensions();
	const containerRef = useRef<HTMLDivElement>(null);
	const lenisRef = useRef<Lenis | null>(null);

	const classes = cn("overflow-y-auto w-full", className);

	useImperativeHandle(ref, () => lenisRef.current!, []);

	useEffect(() => {
		if (!containerRef.current) return;

		const defaultOptions = {
			lerp: width && width >= 1024 ? 0.1 : 1,
			autoResize: true,
			...options,
		};

		lenisRef.current = new Lenis({
			wrapper: root ? window : containerRef.current,
			content: root ? document.documentElement : containerRef.current,
			...defaultOptions,
		});

		function raf(time: number) {
			lenisRef.current?.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenisRef.current?.destroy();
			lenisRef.current = null;
		};
	}, [root, width, options]);

	return (
		<div ref={containerRef} className={classes} style={props.style} {...props}>
			{children}
		</div>
	);
});

SmoothScroller.displayName = "SmoothScroller";
export default SmoothScroller;
