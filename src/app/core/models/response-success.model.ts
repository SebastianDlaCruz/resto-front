export interface ResponseSuccess<T> {
  statusCode: number;
  message: string;
  success: boolean
  data?: T
}
