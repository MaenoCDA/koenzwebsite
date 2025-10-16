import { DEBUG_MODE } from '~/config';

type ErrorData<TData extends object = object> = {
	errors: {
		[key in keyof TData]: string[];
	};
	message: string;
};

export class FetchError<TData extends object> extends Error {
	constructor(
		message: string,
		public data?: ErrorData<TData>,
		public status?: number
	) {
		super(message);
	}
}

export const handleResponse = async <TData = object>(response: Response): Promise<TData> => {
	const url = `${response.url} [${response.status}] ${sideLabel}`;

	const data = await response.json().catch((error: Error) => {
		error.message = `${url}: Failed to parse JSON response: ${error.message}`;

		throw error;
	});

	if (!response.ok) {
		console.error(` ❌ ${url}`);

		throw new FetchError(`${url} ${response.statusText}`, data as ErrorData, response.status);
	}

	if (DEBUG_MODE) {
		console.info(` ✅ ${url}`);
		console.info(' 💬 response object:');
		console.info(data);
	}

	return data;
};

export const handleError = (error: Error) => {
	console.error('error', error);
	error.message = `Fetch failed ${sideLabel}: ${error.message}`;

	throw error;
};

export const handleApiResponse = async <TData extends Record<string, any>, P extends any[]>(
	promise: (...args: P) => Promise<TData>,
	...args: P
): Promise<Response> => {
	return await promise(...args)
		.then((data) => new Response(JSON.stringify(data)))
		.catch(
			(error: FetchError<TData>) => new Response(JSON.stringify(error.data), { status: error.status || 500, statusText: error.message })
		);
};

export const isServerSide = typeof window === 'undefined';
export const sideLabel = `(${isServerSide ? 'server' : 'client'}-side)`;
