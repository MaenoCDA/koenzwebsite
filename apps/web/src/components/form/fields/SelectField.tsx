'use client';

import { PropsWithChildren, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Option = { value: string; label: string };

interface SelectFieldProps extends PropsWithChildren {
	name: string;
	label: string;
	options: Option[];
	register: UseFormRegisterReturn;
	className: string;
}

const SelectField = ({ name, label, options, register, className, children }: SelectFieldProps) => {
	const id = useId();

	return (
		<div className={className}>
			<label htmlFor={id} className="legend">
				{label}
			</label>
			<select
				id={id}
				className="border-1 block min-h-12 w-full rounded-lg border bg-[right_.75em_center] bg-no-repeat p-2.5 text-sm text-gray-900 [background-size:.75em_.75em]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e")`,
				}}
				{...register}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{children}
		</div>
	);
};

export default SelectField;
