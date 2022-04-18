export type ColumnConfigPipe = 'percent' | 'number' | 'date';

export interface ColumnConfig {
  field: string;
  header: string;
  type?: string;
  typeParam?: string;
  typeParams?: typeParams;
  pipe?: ColumnConfigPipe;
  pipeParam?: string;
  tooltip?: string;
  translate?: boolean;
}

export interface typeParams {
  link: string;
  preLink?: string;
  postLink?: string;
  external?: boolean;
}
