import { PropsWithChildren, useContext } from 'react';
import Button from '~/src/components/input/Button';
import Footer from '~/src/components/section/Footer';
import Header from '~/src/components/section/Header';
import { MenuProvider } from '~/src/contexts/MenuContext';
import WebsiteContext from '~/src/contexts/WebsiteContext';
import { filterMenusBySlugs } from '~/utils/helpers';

const ClientLayout = ({ children }: PropsWithChildren) => {
	const { menus } = useContext(WebsiteContext);
	const headerMenus = filterMenusBySlugs(menus, ['main-navigation', 'topbar-navigation']);

	return (
		<MenuProvider menus={headerMenus}>
			<Button
				href="#main-content"
				className="absolute left-0 top-0 z-infinite -translate-y-full opacity-0 focus:-translate-y-0 focus:opacity-100"
			>
				Skip to main content
			</Button>
			<div className=" grid min-h-screen grid-rows-[auto_1fr_auto]">
				<Header />
				<main id="main-content" className="[&>*:not(:nth-of-type(2)):not(:nth-of-type(1))]:bordered">
					{children}
				</main>
				<Footer />
			</div>
		</MenuProvider>
	);
};

export default ClientLayout;
