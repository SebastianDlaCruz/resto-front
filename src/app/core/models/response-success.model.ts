export interface ResponseSuccess {
  statusCode: number;
  message: string;
  success: boolean
};

export interface ResponseSuccessData<T> extends ResponseSuccess {
  data: T
}
