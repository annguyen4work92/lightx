import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import React from 'react'

interface IHttpProvider {
  interceptors: {
    onRequest: (reqConfig: AxiosRequestConfig<any>) => AxiosRequestConfig<any>
    onResponse: (
      res: AxiosResponse<any, any>
    ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>
  }
}

export const useHttpProvider = (params?: IHttpProvider) => {
  const httpProvider = React.useMemo(() => axios.create(), [])
  React.useEffect(() => {
    httpProvider.defaults.headers.Authentication = `Bearer ${'df'}`
    if (!params) return
    const {
      interceptors: { onRequest, onResponse },
    } = params
    httpProvider.interceptors.request.use(
      (reqConfig: AxiosRequestConfig<any>) => {
        return onRequest(reqConfig)
      }
    )
    httpProvider.interceptors.response.use((value: AxiosResponse<any, any>) => {
      return onResponse(value)
    })
  }, [])
  return {
    httpProvider,
  }
}
