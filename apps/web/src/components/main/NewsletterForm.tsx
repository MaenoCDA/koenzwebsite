'use client';

import { Form as FormInterface } from 'types/schemas/form';
import DynamicForm from '@/components/form/Form';
import { useScopedI18n } from '@/locales/client';

interface NewsletterFormProps {
	form: FormInterface;
}

const NewsletterForm = ({ ...props }: NewsletterFormProps) => {
	const t = useScopedI18n('form');
	const { form } = props;

	if (!form) {
		return <></>;
	}

	return (
		<DynamicForm
			form={form}
			classNames={{
				email: 'rounded [&_input]:!bg-white/15',
			}}
			labels={{
				submit: t('subscribe'),
			}}
		/>
	);
};

export default NewsletterForm;
