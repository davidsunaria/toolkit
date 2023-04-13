import { axiosApi } from '../utils/HttpService';
import { IPayload } from '../interfaces';
import { objectToQuery } from  '../utils/HttpService';
import { IShipForm } from '../interfaces';
// const apiUrl = process.env.REACT_APP_API_URL;

const apiUrl = "https://jsonplaceholder.typicode.com"


export const getApi = async (formData: IPayload): Promise<any> => {
  let queryString="";
  const { url, payload } = formData;
  if(payload){
   queryString =  objectToQuery(payload);
  }
  try {
    const response = await axiosApi.get(`${apiUrl}/${url}?${queryString}`);
    return response?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getData = async (formData:IShipForm) => {
  console.log("formData?.param",formData?.param)
  try {
    let response = await axiosApi.get(`${apiUrl}/${formData?.param}`);
    return response?.data;
  } catch (error:any) {
    return error?.response?.data;
  }
};
