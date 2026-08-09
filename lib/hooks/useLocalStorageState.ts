import { useEffect, useState } from "react";

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
	const [value, setValue] = useState<T>(defaultValue);
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const localstorageValue = localStorage.getItem(key);

		if (localstorageValue !== null) {
			// eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side, so this must run post-mount to avoid a hydration mismatch
			setValue(JSON.parse(localstorageValue) as T);
		}
		setIsInitialized(true);
	}, [key]);

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}, [isInitialized, key, value]);

	return [value, setValue] as const;
}
