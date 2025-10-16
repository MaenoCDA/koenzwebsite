/**
 * Custom hook to debounce a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 */

import { useState, useEffect } from 'react';

const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler); // Clear the timeout if value or delay changes
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
