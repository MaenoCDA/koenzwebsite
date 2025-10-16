'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { classNamesTailwind } from '~/utils/helpers';

type Option = { value: string; label: string };

interface CheckboxFieldProps extends PropsWithChildren {
	name: string;
	label: string;
	options: Option[];
	register: UseFormRegisterReturn;
	className: string;
}

const CheckboxField = ({ name, label, options, register, className, children }: CheckboxFieldProps) => {
	const [itemIds, setItemIds] = useState<string[]>([]);

	useEffect(() => {
		const ids = options.map(() => uuidv4());
		setItemIds(ids);
	}, [options]);

	return (
		<fieldset className={classNamesTailwind('[&>div:not(:last-child)]:mb-1', className)}>
			<legend>{label}</legend>

			{options.map((option, index) => {
				const id = itemIds[index];

				return (
					<div key={`checkbox-${id}-${index}`} className="flex items-center">
						<input
							id={id}
							type="checkbox"
							value={option.value}
							className="border-1 size-[1.25em] rounded border bg-center bg-no-repeat text-primary [background-size:0.9em_0.9em] checked:bg-current checked:bg-[url(/images/check.svg)]"
							{...register}
						/>
						<label htmlFor={id} className="ms-2 text-sm font-medium">
							{option.label}
						</label>
					</div>
				);
			})}
			{children}
		</fieldset>
	);
};

export default CheckboxField;
