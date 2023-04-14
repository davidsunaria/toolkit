import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../Redux/rootReducer";
import { shipmentData } from "../../Redux/slices/shipment";
import { RootState } from "../../Redux/store";
import file from "../../img/file.png"
import logo from "../../img/logo.png"
import noti from "../../img/noti.png"
import setting from "../../img/setting.png"
import plus from "../../img/plus.png"
import moment from "moment";

export const Shipment = ()=>{

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state?.shipmentReducer?.shipingList);
  console.log("dispatch",count)

    // const getData = async () => {
    //     console.log("hi",count)
    //   }
      useEffect(()=>{
       dispatch(shipmentData({param:"shipment"})) 

      },[])
    return(
        <>
       
        <h1>ifn34ioio</h1>
        </>
    )
}



