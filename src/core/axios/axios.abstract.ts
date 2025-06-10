import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import qs                                                                    from 'qs';

import Container         from '@/core/container';
import {EventBusService} from '@/core/service/event-bus.service';

export abstract class AxiosAbstract {
  axios!: AxiosInstance;
  eventBus: EventBusService = Container.resolve(EventBusService);

  constructor(baseURL: string) {
    this.axios = Axios.create({
      baseURL,
      timeout: 1000 * 60,

      paramsSerializer: {
        serialize: (data: any) => qs.stringify(data, {encode: false, allowDots: true, arrayFormat: 'repeat'}),
      },
    });

    this.axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        this.eventBus.sample('interceptors.request');

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        this.eventBus.sample('interceptors.response');

        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {

    return this.axios.get(url, {
        ...options
      }
    );
  }

  delete(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {

    return this.axios.delete(url, {
        ...options
      }
    );
  }

  post(url: string, params?: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {

    return this.axios.post(url, params, {
        ...options
      }
    );
  }

  put(url: string, params?: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {

    return this.axios.put(url, params, {
        ...options
      }
    );
  }

  patch(url: string, params?: any, options?: AxiosRequestConfig): Promise<AxiosResponse> {

    return this.axios.patch(url, params, {
        ...options
      }
    );
  }
}
