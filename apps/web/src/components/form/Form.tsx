'use client';
import { FormProvider, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { Field, Form as FormInterface, FormClassNames, FormLabels } from 'types/schemas/form';
import Button from '../input/Button';
import { useScopedI18n } from '~/src/locales/client';

const SkeletonField = () => (
	<div className="animate-pulse rounded-md p-2">
		<div className="mb-2 h-4 w-1/3 rounded bg-gray-100"></div>
		<div className="h-6 rounded bg-gray-100"></div>
	</div>
);

// Lazy load input components with loading fallback
const TextField = dynamic(() => import('./fields/TextField'), { ssr: false, loading: SkeletonField });
const TextareaField = dynamic(() => import('./fields/TextareaField'), { ssr: false, loading: SkeletonField });
const SelectField = dynamic(() => import('./fields/SelectField'), { ssr: false, loading: SkeletonField });
const CheckboxField = dynamic(() => import('./fields/CheckboxField'), { ssr: false, loading: SkeletonField });
const RadioField = dynamic(() => import('./fields/RadioField'), { ssr: false, loading: SkeletonField });
const FileUploadField = dynamic(() => import('./fields/FileUploadField'), {
	ssr: false,
	loading: SkeletonField,
});

const fieldComponents: Record<string, any> = {
	text: TextField,
	email: TextField,
	textarea: TextareaField,
	select: SelectField,
	checkboxgroup: CheckboxField,
	radio: RadioField,
	file: FileUploadField,
};

const getValidationRules = (field: Field, t: any) => ({
	...field.validation,
	...(field.type === 'email' && {
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: t('email', { field: field.label }),
		},
	}),
});

const FormField = ({
	field,
	index,
	formMethods,
	t,
	className,
}: {
	field: Field;
	index: number;
	formMethods: any;
	t: any;
	className?: string;
}) => {
	const FieldComponent = fieldComponents[field.type];

	if (!FieldComponent) {
		console.warn(`Unsupported field type: ${field.type}`);
		return null;
	}

	const error = formMethods.formState.errors?.[field.name];

	return (
		<FieldComponent
			key={`form-field-${index}`}
			name={field.name}
			label={field.label}
			options={field.options}
			type={field.type}
			className={`${field.classnames} ${className ?? ''} relative`}
			placeholder={field.placeholder}
			register={formMethods.register(field.name, getValidationRules(field, t), [field, t])}
		>
			{error && (
				<p className="absolute left-0 mt-1 text-xs italic text-red-500">
					{error.message !== '' ? error.message : t('required', { field: field.label })}
				</p>
			)}
		</FieldComponent>
	);
};

const useSubmitForm = (formId: string, setFormStatus: React.Dispatch<React.SetStateAction<'idle' | 'success' | 'error'>>) => {
	return useCallback(async (data: Record<string, any>) => {
		try {
			setFormStatus('idle');
			const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/form/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ submission: data, form: formId }),
			});

			const result = await response.json();

			if (response.ok) {
				setFormStatus('success');
			} else {
				throw new Error(result.error || 'Submission failed');
			}
		} catch (error) {
			setFormStatus('error');
		}
	}, []);
};

const FormStatusMessage = ({
	formStatus,
	successMessage,
	errorMessage,
}: {
	formStatus: 'idle' | 'success' | 'error';
	successMessage: string;
	errorMessage: string;
}) => {
	if (formStatus === 'success') {
		return <p>{successMessage}</p>;
	}
	if (formStatus === 'error') {
		return <p>{errorMessage}</p>;
	}
	return null;
};

const RenderFormFields = ({
	fields,
	methods,
	t,
	classNames,
}: {
	fields: Field[];
	methods: any;
	t: (key: string) => string;
	classNames?: FormClassNames;
}) => {
	return (
		<>
			{fields.map((field, index) => (
				<FormField
					key={index}
					field={field}
					index={index}
					formMethods={methods}
					t={t}
					className={(classNames && classNames[field.type]) ?? ''}
				/>
			))}
		</>
	);
};

const DynamicFormFields = ({
	formId,
	fields,
	successMessage,
	errorMessage,
	labels,
	classNames,
}: {
	formId: string;
	fields: Field[];
	successMessage: string;
	errorMessage: string;
	classNames?: FormClassNames;
	labels?: FormLabels;
}) => {
	const t = useScopedI18n('form') as (key: string, params?: Record<string, any>) => string;
	const methods = useForm();
	const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const onSubmit = useSubmitForm(formId, setFormStatus); // Use the custom hook for form submission

	if (!fields || fields.length === 0) {
		return null; // Render nothing if fields are empty
	}

	if (formStatus !== 'idle') {
		return <FormStatusMessage formStatus={formStatus} successMessage={successMessage} errorMessage={errorMessage} />;
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
				<RenderFormFields fields={fields} methods={methods} t={t} classNames={classNames} />
				<Button className="w-fit ml-auto" type="submit">
					{(labels && labels.submit) ?? t('submit')}
				</Button>
			</form>
		</FormProvider>
	);
};

const DynamicForm = ({ classNames, labels, form }: { classNames?: FormClassNames; labels?: FormLabels; form: FormInterface }) => {
	return <DynamicFormFields formId={form.documentId} fields={form.steps?.fields} {...form} labels={labels} classNames={classNames} />;
};

export default DynamicForm;
