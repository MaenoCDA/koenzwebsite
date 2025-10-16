import { Meta } from '../schemas';
import { Endpoints } from './endpoints';

export type FlatResponse = {
	data: never;
};

type DataResponse<T = object> = T extends FlatResponse
	? T
	: {
			data: T[];
			meta: Meta;
		};

type Get<TResponse> = {
	method: 'GET';
	response: DataResponse<TResponse>;
};

export type Api = {
	Get: {
		[K in keyof Endpoints]: Endpoints[K] extends Get<infer R> ? Get<R> : never;
	};
};

type ParamValue = string | number | boolean;
type ReadFrom<Path> = Path extends `${string}[${infer Rest}` ? ReadUntil<Rest> : [];
type ReadUntil<Path> = Path extends `${infer Match}]${infer Rest}` ? [Match, ...ReadFrom<Rest>] : [];
type StrictParams<Pathname> = Pathname extends `${string}[${string}`
	? {
			[Key in ReadFrom<Pathname>[number] as Key]: ParamValue;
		}
	: never;
export type Path<Pathname extends string> = Pathname extends `${string}[${string}`
	? {
			pathname: Pathname;
			params: StrictParams<Pathname>;
		}
	:
			| Pathname
			| {
					pathname: Pathname;
			  };
