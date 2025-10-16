/**
 * @file Resources.tsx
 * @summary Resources component
 *
 */
import Link from 'next/link';
import { Resources as ResourcesProps } from 'types/schemas/main';
import { useContext } from 'react';
import Button from '../input/Button';
import Heading from '../typography/Heading';
import ShareSocials from '../input/ShareButtons';
import Icon from '@/components/icon/Icon';
import FlexContentContext from '~/src/contexts/FlexContentContext';
import { usePageContext } from '~/src/contexts/PageDataContext';

interface ResourceProps extends ResourcesProps {}

// ~~~~ Begin 🌎 Render ~~~~ //
const Resources = ({ ...props }: ResourceProps) => {
	const { flexContent } = usePageContext();

	// const { flexContent } =

	if (!props) {
		return <></>;
	}

	const { resources, summary } = props;

	return (
		<div className="component-margin container">
			<div className="row gap-y-8">
				<div className="col-span-full lg:col-span-5 lg:col-start-2 xl:col-span-3 xl:col-start-3">
					<div className="flex flex-col gap-8">
						<div>
							<Heading title="In This Article:" type="h2" classNames={{ title: 'text-lg md:text-3xl' }} />
							{flexContent && (
								<ul className="flex flex-col gap-4">
									{flexContent.map((component: any) => (
										<li key={component.anchor}>
											<a href={`#${component.anchor}`} className="group flex items-start gap-2 no-underline">
												<span className="bg-glass flex size-8 items-center justify-center rounded-full p-2">
													<Icon iconName="UNGROUP" weight="700" className="size-auto fill-white" />
												</span>
												<span className="text-lg font-bold group-hover:underline">{component.title}</span>
											</a>
										</li>
									))}
								</ul>
							)}
						</div>
						{resources?.length && (
							<div className="flex flex-col gap-2">
								<Heading title="Resources" type="h2" classNames={{ title: 'text-lg md:text-3xl' }} />
								<ul className="flex flex-col gap-4">
									{resources.map((resource, index: number) => (
										<li key={`resource-${index}`}>
											<Link href={resource.url} target="_blank" className="group flex items-start gap-2 no-underline">
												<span className="bg-glass flex size-8 items-center justify-center rounded-full p-2">
													<Icon iconName="UNGROUP" weight="700" className="size-auto fill-white" />
												</span>
												<span className="text-lg font-bold group-hover:underline">{resource.caption || resource.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				{summary && (
					<div className="col-span-full lg:col-span-5 lg:col-start-7 xl:col-span-4 xl:col-start-7">
						<Heading {...summary.heading} classNames={{ title: 'text-lg md:text-3xl' }} />
						<div className="wysiwyg" dangerouslySetInnerHTML={{ __html: summary.text }} />
						{summary?.buttons?.length > 0 &&
							summary.buttons.map((button, index) => (
								<div key={`button-${button.id}-${index}`} className="button-wrapper">
									<Button key={`button-${button.id}`} target={button.link.target} href={button.link.href}>
										{button.label}
									</Button>
								</div>
							))}
						<ShareSocials className="mt-4" />
					</div>
				)}
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ /

export default Resources;
