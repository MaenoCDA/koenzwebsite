import { useState, useEffect, RefObject } from 'react';

const useDropdownPosition = (isOpen: boolean, buttonRef: RefObject<HTMLElement | null>, menuRef: RefObject<HTMLElement | null>): string => {
	const [translateX, setTranslateX] = useState<string>('-50%');

	useEffect(() => {
		if (isOpen && buttonRef.current && menuRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const menuRect = menuRef.current.getBoundingClientRect();
			const viewportWidth = window.innerWidth;

			const spaceOnRight = viewportWidth - buttonRect.left - buttonRect.width / 2;
			const spaceOnLeft = buttonRect.left + buttonRect.width / 2;
			const space = 50;
			const menuWidth = space + menuRect.width / 2;

			if (menuWidth > spaceOnRight) {
				const overflowAmount = menuWidth - spaceOnRight;
				setTranslateX(`calc(-50% - ${overflowAmount}px)`);
			} else if (menuWidth > spaceOnLeft) {
				const overflowAmount = menuWidth - spaceOnLeft;
				setTranslateX(`calc(-50% + ${overflowAmount}px)`);
			} else {
				setTranslateX('-50%');
			}
		}
	}, [isOpen, buttonRef, menuRef]);

	return translateX;
};

export default useDropdownPosition;
