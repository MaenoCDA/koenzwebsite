'use client';

import Button from '@/components/input/Button';
import BoldTitle from '@/components/typography/BoldTitle';
import HeroText from '~/src/components/main/hero/Text';
import { useScopedI18n } from '~/src/locales/client';

const ClientNotFound = () => {
	const scopedT = useScopedI18n('notFound');

	return (
		<>
			<HeroText title={scopedT('title')} />
			<div className="container mx-auto flex items-center px-6 py-12">
				<div>
					<p className="mt-4 max-w-xl text-text">{scopedT('description')}</p>

					<div className="mt-6 flex items-center gap-x-3">
						<Button href="/">{scopedT('button')}</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientNotFound;
