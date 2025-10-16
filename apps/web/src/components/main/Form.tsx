import { Paragraph } from 'types/schemas/main';
import { Form as FormInterface } from 'types/schemas/form';
import Heading from '@/components/typography/Heading';
import { classNamesTailwind } from '~/utils/helpers';
import DynamicForm from '@/components/form/Form';

interface FormProps {
	form: FormInterface;
	paragraph: Paragraph;
	className?: string;
}

const Form = ({ ...props }: FormProps) => {
	if (!props) {
		return <></>;
	}

	const { form, paragraph, className } = props;

	if (!form) {
		return <></>;
	}

	return (
		<div className={classNamesTailwind(className)}>
			<div className="container">
				<div className="row">
					{paragraph && <Heading {...paragraph?.heading} classNames={{ wrapper: 'col-span-full' }} />}
					<div className="col-span-full">
						<DynamicForm form={form} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
