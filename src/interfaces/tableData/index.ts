import { ReactElement } from "react";
import { JsxElement } from "typescript";


export interface ShipingState {
  shipingList :ITableData[] | any;
  isLoading:boolean,
  promiseReject:boolean
}

export interface IActionPayload {
  type :string,
  payload:ITableData[],
  meta:any
}

export interface ITableData {
  assignee: string
  buyer:string
  cargo:string
  created:string
  departure:string
  dest:string
  discharge:string
  id:number
  shipment:string
  status:string
  vessel:string
}

