import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../Redux/rootReducer";
import { shipmentData } from "../../Redux/slices/shipment";
import { RootState } from "../../Redux/store";

export const Shipment = ()=>{

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state?.shipmentReducer?.shipingList);
  console.log("dispatch",count)

    // const getData = async () => {
    //     console.log("hi",count)
    //   }
      useEffect(()=>{
       dispatch(shipmentData({param:"todos"})) 

      },[])
    return(
        <>
        <button className="btn btn-info mt-3">start</button>
        </>
    )
}



