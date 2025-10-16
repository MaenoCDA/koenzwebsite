'use client';

import { PropsWithChildren, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps extends PropsWithChildren {
	name: string;
	label: string;
	placeholder?: string;
	validation?: object;
	register: UseFormRegisterReturn;
	className: string;
}

const TextareaField = ({ name, label, placeholder, validation, register, className, children }: TextareaProps) => {
	const id = useId();

	return (
		<div className={className}>
			<div className="relative">
				<textarea
					id={id}
					placeholder={placeholder}
					className="border-1 peer block max-h-56 min-h-32 w-full rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm"
					style={{ fieldSizing: 'content' }}
					{...register}
				/>
				<label
					htmlFor={id}
					className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:-translate-y-0  peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
				>
					{label}
				</label>
			</div>
			{children}
		</div>
	);
};

export default TextareaField;
