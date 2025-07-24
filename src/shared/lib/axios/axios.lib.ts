// custom-instance.ts

import type { AxiosRequestConfig } from 'axios'
import Axios, { AxiosError } from 'axios'

const baseURL = import.meta.env.DEV ? '/api' : '/vue-admin-simple/api'

export const axiosInstance = Axios.create({ baseURL, withCredentials: true })

export const request = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  const promise = axiosInstance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }: { data: T }) => data)

  // @ts-expect-error - cancel is not defined in the axios instance
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>

export type BodyType<BodyData> = BodyData

// Or, in case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
// export type BodyType<BodyData> = CamelCase<BodyData>
