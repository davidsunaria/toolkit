import axios from "axios";
import { IShipForm } from '../interfaces';
// const apiUrl = process.env.REACT_APP_API_URL;

const apiUrl = "https://jsonplaceholder.typicode.com"




export const getData = async (formData:IShipForm) => {
  console.log("formData?.param",formData?.param,`${apiUrl}/${formData?.param}`)
  try {
    let response = await axios.get(`${apiUrl}/${formData?.param}`);
    return response?.data;
  } catch (error:any) {
    return error?.response?.data;
  }
};
