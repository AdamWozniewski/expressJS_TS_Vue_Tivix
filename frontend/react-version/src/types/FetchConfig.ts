export type FetchConfig = {
  method: string;
  mode?: any;
  cache?: any;
  credentials?: any;
  headers?: {
    'Content-Type': string;
    Accept?: string,
  },
  redirect?: any;
  referrerPolicy?: any;
  body?: any;
}