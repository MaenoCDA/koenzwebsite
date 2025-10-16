import Hamburger from 'hamburger-react';
import { useMenu } from '~/src/contexts/MenuContext';

export const NavToggle = () => {
	const { isOpen, setOpen } = useMenu();

	return (
		<div className="rounded-full bg-white text-primary">
			<Hamburger
				rounded={true}
				color="currentColor"
				size={20}
				hideOutline={false}
				toggled={isOpen['mobile']}
				toggle={() => setOpen('mobile', !isOpen['mobile'])}
			/>
		</div>
	);
};

export default NavToggle;
