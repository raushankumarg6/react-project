import API from './API'

export const getDataByURL = async (path: string) => {
  return await API.get(`${path}`)
}
export const getDataByURLWithId = async (path: string, id: number) => {
  return await API.get(`${path}/${id}`)
}

export const postDataByURL = async (path: string, data: any) => {
  return await API.post(`${path}`, data)
}

export const updateDataByURL = async (path: string, data: any) => {
  return await API.put(`${path}`, data)
}
