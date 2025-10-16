export type LoadingModel<T> =
  | { data: T; loading: boolean; error: undefined }
  | { data: undefined; loading: true; error: undefined }
  | { data: undefined; loading: false; error: Error };

export type RedirectValue = {
  destination: LinkInternal;
};

export type LinkValue = {
  type: 'internal' | 'external';
  target: 'blank' | 'self';
  label: string;
} & (
  | {
      type: 'internal';
      link: LinkInternal;
    }
  | {
      type: 'external';
      link: LinkExternal;
    }
);

export type LinkInternal = {
  id: number;
  uid: string;
  kind: string;
  slug: string;
};

export type LinkExternal = string;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Route = {
  slug: string;
  locale?: string;
  id?: number;
  title?: string;
  parent?: any;
  uid: string;
  kind?: string;
  route: string;
};
