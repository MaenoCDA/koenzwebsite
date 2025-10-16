import { parse, stringify } from 'qs';
import { SubNavLink, SubNavSection, SubNavSections } from '@strapi/design-system';
import { NavLink } from 'react-router-dom';
import menuItems from '../../../config/menu';
import styled from 'styled-components';

const SubNavLinkCustom = styled(SubNavLink)`
	div {
		background: transparent !important;
		width: inherit;
		span:nth-child(2) {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			width: inherit;
		}
	}
`;
const LeftMenuItems = ({ props }: { props: any }) => {
	return (
		<SubNavSections>
			{menuItems.map((section) => {
				return (
					<SubNavSection key={section.id} label={section.title} badgeLabel={section.links.length.toString()}>
						{section.links.map((link) => {
							return (
								<SubNavLinkCustom
									tag={NavLink}
									key={link.uid}
									to={{
										pathname: link.to,
										search: stringify({
											...parse(link.search ?? ''),
											plugins: props.getPluginsParamsForLink(link),
										}),
									}}
									width="100%"
									active={false}
								>
									<>{link.title}</>
								</SubNavLinkCustom>
							);
						})}
					</SubNavSection>
				);
			})}
		</SubNavSections>
	);
};

export default LeftMenuItems;
