const BaseUrl = 'https://jsonplaceholder.typicode.com'

export enum EndPoint {
  GetList = '/todos/1',
}

export const getApiUrl = (uri: EndPoint) => `${BaseUrl}${uri}`
export default { EndPoint }
