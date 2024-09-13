import { useEffect } from 'react';

export const useKeyPress = (
	callback: (T?: any) => void,
	keys: KeyboardKey[],
) => {
	const onKeyDown = (event: KeyboardEvent) => {
		const wasAnyKeyPressed = keys.some((key) => event.key === key);

		if (wasAnyKeyPressed) {
			event.preventDefault();
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [onKeyDown]);
};

// enums/KeyboardKey.ts
export enum KeyboardKey {
	escape = 'Escape',
	enter = 'Enter',
	arrowleft = 'ArrowLeft',
	arrowright = 'ArrowRight',
}
