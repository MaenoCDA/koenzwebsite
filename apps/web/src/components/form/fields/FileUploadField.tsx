'use client';

import React, { PropsWithChildren, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { useScopedI18n } from '~/src/locales/client';

interface FileUploadFieldProps extends PropsWithChildren {
	name: string;
	label: string;
	className: string;
}

const FileUploadField = ({ name, label, className, children }: FileUploadFieldProps) => {
	const t = useScopedI18n('form');
	const { setValue, watch } = useFormContext();
	const id = useId();

	const selectedFile = watch(name);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			setValue(name, e.target.files);
		}
	};

	return (
		<div className={className}>
			<label className="legend" htmlFor={id}>
				{label}
			</label>
			<input type="file" id={id} className="w-full rounded-lg border p-2" onChange={handleFileChange} />
			{selectedFile && selectedFile.length > 0 && (
				<p className="text-xs italic text-gray-500">
					{t('selectedFile')}: {selectedFile[0]?.name}
				</p>
			)}
			{children}
		</div>
	);
};

export default FileUploadField;
