'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { classNamesTailwind } from '~/utils/helpers';

type Option = { value: string; label: string };

interface RadioFieldProps extends PropsWithChildren {
	name: string;
	label: string;
	options: Option[];
	register: UseFormRegisterReturn;
	className: string;
}

const RadioField = ({ label, options, register, className, children }: RadioFieldProps) => {
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
					<div key={`radio-${id}-${index}`} className={classNamesTailwind('flex items-center')}>
						<input
							checked
							id={id}
							type="radio"
							value={option.value}
							className={classNamesTailwind(
								'border-1 size-[1.25em] rounded-full border text-primary checked:bg-current checked:bg-[url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J3doaXRlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxjaXJjbGUgY3g9JzgnIGN5PSc4JyByPSczJy8+PC9zdmc+)]'
							)}
							{...register}
						/>
						<label htmlFor={id} className={classNamesTailwind('ms-2 text-sm font-medium')}>
							{option.label}
						</label>
					</div>
				);
			})}
			{children}
		</fieldset>
	);
};

export default RadioField;
