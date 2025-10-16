/**
 * Traverse recursively through a data structure to find "steps", format them using formatFormFields, and update the object.
 *
 * @param {Object|Array} data - The data structure to traverse.
 */
const traverseAndFormatSteps = (data) => {
	const traverse = (node) => {
		if (Array.isArray(node)) {
			// If the current node is an array, loop through its elements
			node.forEach((item) => traverse(item));
		} else if (typeof node === 'object' && node !== null) {
			// If the current node is an object, check for the "steps" key
			if ('steps' in node) {
				// Modify the object: Format the steps using formatFormFields
				node.steps = formatFormFields(node);
			} else {
				// Otherwise, traverse the object's values recursively
				Object.values(node).forEach((value) => traverse(value));
			}
		}
	};

	traverse(data);
};

const TransformFormConfig = async (strapi, ctx) => {
	const { body, request } = ctx;
	const { data } = body;

	if (!data || !data.length || !request.query) {
		return;
	}

	traverseAndFormatSteps(data);
};

const widthClassMap = {
	12: 'col-span-full',
	8: 'col-span-8',
	6: 'col-span-6',
	4: 'col-span-4',
};

const formatFormFields = (form) => {
	// Transform the form data
	const formattedSteps = form.steps.map((step) => {
		const layouts = step.layouts;
		return {
			step: step.id,
			fields: layouts.lg.map((fieldLayout) => {
				const fieldData = fieldLayout.field;

				const lgWidth = widthClassMap[fieldLayout.w] || 'col-span-full';
				const mdWidth = widthClassMap[layouts.md.find((f) => f.i === fieldLayout.i)?.w] || 'col-span-full';
				const smWidth = widthClassMap[layouts.sm.find((f) => f.i === fieldLayout.i)?.w] || 'col-span-full';

				return {
					name: fieldData.name,
					type: fieldData.type,
					label: fieldData.label,
					placeholder: fieldData.placeholder || '',
					classnames: `${smWidth} lg:${lgWidth} md:${mdWidth}`,
					options: fieldData.options || [],
					validation: { required: fieldData.config?.required },
				};
			}),
		};
	});

	if (formattedSteps.length === 1) {
		const fields = formattedSteps.flat().pop();
		delete fields.step;

		return fields;
	}

	return { steps: formattedSteps, count: formattedSteps.length };
};

export default TransformFormConfig;
