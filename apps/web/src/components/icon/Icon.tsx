import { IconProps, iconMap } from './IconMap'; // Adjust the import paths as needed
import { classNamesTailwind } from '~/utils/helpers';
import { DEBUG_MODE } from '~/config';

const Icon = ({ iconName, className, weight = '400', variant = 'rounded' }: IconProps) => {
	const IconComponent = iconMap[iconName]?.[weight]?.[variant];

	if (!IconComponent) {
		if (DEBUG_MODE) {
			console.log(`Icon "${iconName}" with weight "${weight}" and variant "${variant}" not found in iconMap.`);
		}
		return null;
	}

	return <IconComponent className={classNamesTailwind(className)} data-slot="icon" />;
};

export default Icon;
