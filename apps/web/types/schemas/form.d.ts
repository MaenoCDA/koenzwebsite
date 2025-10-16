type BreakpointClassnames = {
	sm: string;
	md: string;
	lg: string;
};

type Option = {
	value: string;
	label: string;
};

type ValidationRules = {
	required?: boolean;
	pattern?: string;
	minLength?: number;
	maxLength?: number;
	[key: string]: any; // Allow for additional validation rules
};

export type Field = {
	name: string;
	type: 'text' | 'email' | 'radio' | 'checkboxgroup' | 'select' | 'file' | 'textarea';
	label: string;
	placeholder: string;
	classnames: BreakpointClassnames;
	options?: Option[];
	validation?: ValidationRules;
};

type Step = {
	step: number;
	fields: Field[];
};

export type Form = {
	documentId: string;
	successMessage: string;
	errorMessage: string;
	active: boolean;
	steps: {
		fields: Field[];
	};
};

export type FormLabels = {
	[key: string]: string;
};

export type FormClassNames = {
	[key: string]: string;
};
