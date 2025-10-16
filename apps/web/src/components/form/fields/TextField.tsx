import { UseFormRegisterReturn } from 'react-hook-form';
import { useId } from 'react';
import { classNamesTailwind } from '~/utils/helpers';

interface TextFieldProps extends React.PropsWithChildren {
	name: string;
	label: string;
	type: 'text' | 'email' | 'password' | 'number';
	placeholder?: string;
	className: string;
	register: UseFormRegisterReturn;
}

const TextField = ({ label, type, placeholder, className, register, children }: TextFieldProps) => {
	const id = useId();

	return (
		<div className={classNamesTailwind(className)}>
			<div className="relative">
				<input
					type={type}
					noValidate
					id={id}
					className="bg-white peer block min-h-12 w-full appearance-none rounded-sm px-2.5 py-4 text-sm"
					placeholder={placeholder}
					{...register}
				/>
			</div>
			{children}
		</div>
	);
};

export default TextField;
