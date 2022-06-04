/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';
import { stringify } from 'query-string';

export type Params = AxiosRequestConfig['params'];
export type Headers = AxiosRequestConfig['headers'];

export interface ApiReturn {
  success: boolean;
  poll?: boolean;
  message?: string;
  error?: Error;
}

export interface ApiResponse<T> {
  data: T | null;
  statusCode: string | null;
  responseMessage: string | null;
}

export const DEFAULT_TIMEOUT = 600000;

export const createAxiosInstance = (auth: boolean, baseURL: string) => {
  const apiInstance: AxiosInstance = axios.create({
    baseURL,
    validateStatus: (status) => status >= 200 && status < 400,
    timeout: DEFAULT_TIMEOUT,
  });

  apiInstance.interceptors.request.use((request) => {
    // const accessToken = localStorage.getItem('access_token');
    const accessToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGFoIiwiaWF0IjoxNjU0MzI2NjE4LCJzdWIiOiIyIiwiZXhwIjoxNjU0OTMxNDE4LCJpZCI6Miwicm9sZXMiOiJVU0VSIn0.kMOK315cue1bt5Hd_Cf4qooEySg4uwUKUwEzXhnDWOQ';

    if (auth) {
      if (accessToken) {
        if (request && request.headers) {
          request.headers['X-AUTH-TOKEN'] = `${accessToken}`;
        }
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('로그인을 다시 해 주세요.');
      }
    }
    return request;
  });

  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        return error.response;
      }
      return JSON.parse(error);
    },
  );

  return apiInstance;
};

class ApiAgent {
  private axiosInstance: AxiosInstance;

  constructor(auth: boolean) {
    this.axiosInstance = createAxiosInstance(auth, 'https://api.blahblahfridge.site');
  }

  postRequest = async <T>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>> => {
    // let response: AxiosResponse<T>
    if (config?.stringify) {
      // eslint-disable-next-line no-param-reassign
      data = stringify(data);
    }
    // eslint-disable-next-line no-useless-catch
    const response = await this.axiosInstance.post(url, data, config);

    return response;
  };

  getRequest = async <T>(
    url: string,
    params?: Params,
    headers?: Headers,
    restRequestConfig?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    const response = await this.axiosInstance.get(url, {
      params,
      headers,
      ...restRequestConfig,
    });

    return response;
  };

  putRequest = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const response = await this.axiosInstance.put(url, data, config);
    return response;
  };

  deleteRequest = async <T>(url: string, params?: any): Promise<AxiosResponse<T>> => {
    const response = await this.axiosInstance.delete(url, { params });
    return response;
  };
}

export const createCancelToken = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  const { CancelToken } = axios;
  const source = CancelToken.source();
  return source;
};

export const cancelRequest = (source: CancelTokenSource, message?: string) => {
  source.cancel(message ?? '');
};

export const authApiAgent = new ApiAgent(true);
export const unauthApiAgent = new ApiAgent(false);
