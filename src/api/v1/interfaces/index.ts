export interface ResponseObj<T> {
  status: number;
  message: string;
  data: T[];
}
