/**
 * Todo - Field styling
 */
import { ReactNode } from 'react';
import { classNamesTailwind } from '~/utils/helpers';

const variants = {
	variant: {
		default:
			'border rounded-lg ring-zinc-800 ring-zinc-300 focus-within:ring-2 focus-within:ring-offset-2 dark:focus-within:ring-zinc-400 focus-within:ring-offset-white dark:focus-within:ring-offset-black focus-within:ring-zinc-600',
		underlined:
			'border-b dark:border-zinc-800 focus-within:border-b-2 dark:focus-within:border-zinc-400 focus-within:border-zinc-500 rounded-none px-0',
	},
	size: {
		sm: 'h-8',
		md: 'h-10',
		lg: 'h-12',
	},
};

interface InputGroupProps {
	className?: string;
	variant?: 'default' | 'underlined';
	size?: 'sm' | 'md' | 'lg';
	children: ReactNode;
}

const InputGroup = ({ className, variant = 'default', size = 'md', children }: InputGroupProps) => {
	return (
		<div
			data-slot="control"
			className={classNamesTailwind(
				'relative isolate flex items-center border border-neutral-20',
				className,
				variants.variant[variant],
				variants.size[size]
			)}
		>
			{children}
		</div>
	);
};

export default InputGroup;
