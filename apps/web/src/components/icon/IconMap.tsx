import ChevronLeft from '@/material-symbols/svg-400/rounded/chevron_left-fill.svg';
import ChevronRight from '@/material-symbols/svg-400/outlined/chevron_right.svg';
import Eye from '@/material-symbols/svg-400/rounded/eye_tracking.svg';
import Edit from '@/material-symbols/svg-400/rounded/edit.svg';
import Search from '@/material-symbols/svg-400/rounded/search.svg';
import Play from '@/material-symbols/svg-400/rounded/play_arrow-fill.svg';
import Ungroup from '@/material-symbols/svg-400/rounded/ungroup-fill.svg';
import UngroupWeighted from '@/material-symbols/svg-700/rounded/ungroup-fill.svg';
import ArrowForward from '@/material-symbols/svg-400/rounded/arrow_forward-fill.svg';
import ArrowForwardWeighted from '@/material-symbols/svg-700/rounded/arrow_forward-fill.svg';
import OtherHouses from '@/material-symbols/svg-400/outlined/other_houses.svg';
// Import other icons as needed

export const iconMap = {
	CHEVRON_LEFT: {
		'400': {
			rounded: ChevronLeft,
			// Add other variants if needed
		},
	},
	CHEVRON_RIGHT: {
		'400': {
			outlined: ChevronRight,
			rounded: ChevronRight,
		},
		'700': {
			outlined: ChevronRight,
			// Add other variants if needed
		},
	},
	EYE: {
		'400': {
			rounded: Eye,
			// Add other variants if needed
		},
	},
	EDIT: {
		'400': {
			rounded: Edit,
			// Add other variants if needed
		},
	},
	SEARCH: {
		'400': {
			rounded: Search,
			// Add other variants if needed
		},
	},
	PLAY: {
		'400': {
			rounded: Play,
			// Add other variants if needed
		},
	},
	UNGROUP: {
		'400': {
			rounded: Ungroup,
		},
		'700': {
			rounded: UngroupWeighted,
		},
	},
	ARROW_FORWARD: {
		'400': {
			rounded: ArrowForward,
		},
		'700': {
			rounded: ArrowForwardWeighted,
		},
	},
	OTHER_HOUSES: {
		'400': {
			rounded: OtherHouses,
		},
	},
	// Add other icons as needed
};

export interface IconProps {
	iconName: keyof typeof iconMap;
	className?: string;
	weight?: '400' | '700'; // Add other weights if needed
	variant?: 'rounded' | 'outlined'; // Add other variants if needed
}
