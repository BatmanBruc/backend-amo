export interface Result {
  status: number;
  success: boolean;
  content: any;
}

export interface SuccessResult<T> extends Result {
  content: T;
  success: true;
}

export interface ErrorResult<T> extends Result {
  title: string;
  content: T;
  success: false;
}

export interface SuccessResultAuth {
  access_token: string;
  base_domain: string;
}

export interface ErrorResultAuth {
  error: string;
}
