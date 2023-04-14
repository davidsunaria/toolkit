import React,{ useEffect, useState } from "react";
// import { useStoreActions, useStoreState } from "easy-peasy";
import {useStoreState, useStoreActions } from "../../store";

export const Shipment = ()=>{

    const shipmentData= useStoreState((state) => state.shipment.shipmentData);
    console.log("shipmentData",shipmentData)
    //Actions
    const getShipmentData = useStoreActions((actions) => actions.shipment.getShipmentData);

    const getData = async () => {
        await getShipmentData({ param:"comments"});
      }
      useEffect(()=>{
        getData()

      },[])
    return(
        <>
        <h1>yh</h1>
        </>
    )
}



