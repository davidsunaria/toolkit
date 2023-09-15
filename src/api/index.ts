import axios from "axios";
import { IShipForm } from '../interfaces';

const apiUrl = "https://643979ac4660f26eb1b41543.mockapi.io/"




export const getData = async (formData:IShipForm) => {
  try {
    let response = await axios.get(`${apiUrl}/${formData?.param}`);
    return response?.data;
  } catch (error:any) {
    return error?.response?.data;
  }
};


export const deleteData = async (formData:IShipForm) => {
  try {
    let response = await axios.delete(`${apiUrl}/${formData?.param}/${formData?.id}`);
    return response?.data;
  } catch (error:any) {
    return error?.response?.data;
  }
};

