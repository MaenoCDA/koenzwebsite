/**
 * @file Accordion.tsx
 * @summary Accordion Flex component
 * @todo Implement Accordion
 *
 */

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Heading from '../typography/Heading';
import { AccordionContent } from '~/types/schemas/main';
import { classNamesTailwind } from '~/utils/helpers';

// ~~~~ Begin 🌎 Render ~~~~ //
const Accordion = ({ heading, items, className }: AccordionContent) => {
	const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
	const [itemIds, setItemIds] = useState<string[]>([]);

	useEffect(() => {
		const ids = items.map(() => uuidv4());
		setItemIds(ids);
	}, [items]);

	const toggleItem = (id: string) => {
		setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	return (
		<div className={classNamesTailwind('component-margin container', className)}>
			<div className="row">
				<div className="col-span-full lg:col-span-6 lg:col-start-3">
					<Heading {...heading} />
				</div>

				<div className="col-span-full lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
					<div>
						{items.map((item, index) => {
							const id = itemIds[index];
							const isOpen = openItems[id] || false;

							return (
								<div id={id} key={`accordion-${id}-${index}`} className={classNamesTailwind('border-b border-stroke last:border-none')}>
									<button
										onClick={() => toggleItem(id)}
										aria-expanded={isOpen}
										aria-controls={`sect${id}`}
										id={`accordion${id}`}
										className={classNamesTailwind(
											'hocus:bg-glass my-3 grid w-full grid-cols-[1fr_auto] items-center gap-4 rounded-sm px-4 py-2 text-start no-underline transition-all hocus:text-text md:my-6 md:px-4',
											{
												'md:bg-glass': isOpen,
											}
										)}
									>
										<span className="text-lg font-bold">{item.title}</span>
										<span className="relative flex size-10 items-center justify-center">
											<span className="absolute h-0.5 w-1/2 bg-white" />
											<span
												className={classNamesTailwind('absolute h-0.5 w-1/2 rotate-90 bg-white transition-transform', {
													'rotate-0': isOpen,
												})}
											/>
										</span>
									</button>
									<div
										id={`sect${id}`}
										role="region"
										aria-hidden={!isOpen}
										aria-labelledby={`accordion${id}`}
										className={classNamesTailwind(
											'grid transition-[grid-template-rows] duration-300',
											isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
										)}
									>
										<div className="flex justify-center overflow-hidden">
											<div className="prose w-10/12 pb-6" dangerouslySetInnerHTML={{ __html: item.text }} />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Accordion;
