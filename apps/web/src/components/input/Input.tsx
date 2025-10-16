import { classNamesTailwind } from '~/utils/helpers';

const Input = ({
	className,
	ref,
	...props
}: {
	className?: string;
	name: string;
	ref?: React.ForwardedRef<HTMLInputElement>;
	type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'date';
	value?: string | string[];
	placeholder?: string;
	id?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
	return (
		<input
			className={classNamesTailwind(
				'rounded-xl border px-4 py-2 ring-zinc-300 focus-within:ring-2 focus-within:ring-zinc-600 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-zinc-400 dark:focus-within:ring-offset-black',
				className
			)}
			ref={ref}
			{...props}
		/>
	);
};

export default Input;
