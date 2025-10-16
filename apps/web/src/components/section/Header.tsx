import ReactFocusLock from 'react-focus-lock';
import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Navbar from './Navbar';
import NavMobile from '@/components/navigation/NavMobile';
import { useMenu } from '~/src/contexts/MenuContext';

const parentVariants = {
	visible: { y: '0%' },
	hidden: { y: '-100%' },
};

// ~~~~ Begin 🌎 Render ~~~~ //
const Header = () => {
	const { isOpen } = useMenu();

	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [prevScroll, setPrevScroll] = useState(0);

	function update(latest: number, prev: number): void {
		if (latest < prev) {
			setHidden(false);
		} else if (latest > 100 && latest > prev) {
			setHidden(true);
		}
	}

	useMotionValueEvent(scrollY, 'change', (latest: number) => {
		update(latest, prevScroll);
		setPrevScroll(latest);
	});

	return (
		<ReactFocusLock disabled={!isOpen['mobile']}>
			<motion.header
				variants={parentVariants}
				animate={hidden ? 'hidden' : 'visible'}
				transition={{
					ease: [0.1, 0.25, 0.3, 1],
					duration: 0.6,
				}}
				className="fixed z-50 w-full"
			>
				<div className="lg:container max-lg:px-6">
					<Navbar />
					<NavMobile />
				</div>
			</motion.header>
		</ReactFocusLock>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Header;
