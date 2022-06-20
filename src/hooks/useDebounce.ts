import { useRef } from 'react';

export default function useDebounce(fn: (...args: any) => any, delay: number) {
	const timeOutRef = useRef<number>(0);

	function debounceFn(...args: any) {
		window.clearTimeout(timeOutRef.current);

		timeOutRef.current = window.setTimeout(() => {
			fn(...args);
		}, delay);
	}

	return debounceFn;
}
