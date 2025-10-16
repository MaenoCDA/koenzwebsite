import { useState, useRef, ReactNode, useEffect, useCallback } from 'react';
import { motion, useTransform, useSpring, useReducedMotion, useScroll } from 'framer-motion';
import classNames from 'classnames';
import { throttle } from 'lodash';

type ParallaxProps = {
	children: ReactNode;
	offset?: number;
	className?: string;
	classNameParallax?: string;
};

const ParallaxWrapper = ({ children, offset = 50, className, classNameParallax }: ParallaxProps): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = useReducedMotion();
	const [elementTop, setElementTop] = useState<number>(0);
	const [clientHeight, setClientHeight] = useState<number>(0);

	const { scrollY } = useScroll();

	const initial = elementTop - clientHeight;
	const final = elementTop + offset;

	const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
	const y = useSpring(yRange, { stiffness: 400, damping: 90 });

	// Methods.
	const onResize = useCallback(() => {
		const element = ref.current;

		if (typeof window === 'undefined' || !element) {
			return;
		}

		setElementTop(element.getBoundingClientRect().top + window.scrollY);
		setClientHeight(window.innerHeight);
	}, [setElementTop, setClientHeight]);

	const handleOnResizeThrottled = useCallback(() => throttle(onResize, 200), [onResize]);

	// Life cycle.
	useEffect(() => {
		onResize();
		window.addEventListener('resize', handleOnResizeThrottled);
		return () => window.removeEventListener('resize', handleOnResizeThrottled);
	}, [ref, handleOnResizeThrottled, onResize]);

	// Don't parallax if the user has "reduced motion" enabled
	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div className={classNames(className, classNameParallax)} ref={ref} style={{ y }}>
			{children}
		</motion.div>
	);
};

export default ParallaxWrapper;
