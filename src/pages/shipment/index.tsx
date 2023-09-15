import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shipmentData,deleteShipmentData } from "../../Redux/slices/shipment";
import { RootState } from "../../Redux/store";
import { ITableData } from "../../interfaces";
import ellipsis from "../../img/three-ellipsis.png"
import headphone from "../../img/headphones.png"
import moment from "moment";

 const Shipment = ()=>{

  const dispatch = useDispatch();
  const shipingList = useSelector((state: RootState) => state?.shipmentReducer?.shipingList);
  useEffect(()=>{
    dispatch(shipmentData({param:"shipment"})) 
  },[])

 const deleteApi = async(id:number)=>{
   await dispatch(deleteShipmentData({param:"shipment",id:id}))
  

 }

    return(
        <>
       
       <div className="container-fluid">
        <div className="table-responsive">
        <table className="table table-responsive table-borderless">
        
      <thead>
        <tr style={{borderTop:"1px solid #000000",borderBottom:"1px solid #000000"}}>
          <th scope="col"style={{width:"3%"}}><input className="form-check-input" type="checkbox"/></th>
          <th scope="col"style={{width:"4%"}}>Action</th>
          <th scope="col" style={{width:"8%"}}>Shipment No</th>
          <th scope="col" style={{width:"12%"}}>Buyer Name</th>
          <th scope="col"style={{width:"8%"}}>Destination</th>
          <th scope="col" style={{width:"10%"}}>Discharge Port</th>
          <th scope="col" style={{width:"10%"}}>Departure</th>
          <th scope="col"style={{width:"10%"}}>Cargo Cutoffe</th>
          <th scope="col"style={{width:"5%"}}>Status</th>
          <th scope="col"style={{width:"15%"}}>Vessel /Aircraft</th>
          <th scope="col" style={{width:"7%"}}>Created </th>
          <th scope="col" style={{width:"10%"}}>Assignee </th>
        </tr>
      </thead>
  <tbody>

    {
          shipingList && shipingList?.length ? shipingList?.map((val:ITableData,i:number)=>{
             return <>
              <tr key={i}>
                <th scope="row"><input className="form-check-input" type="checkbox"/></th>
                <td title="Delete" onClick={()=> deleteApi(val?.id)}><img src={ellipsis} style={{width:"15px"}}/></td>
                <td>{val?.shipment}</td>
                <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">{val?.buyer}</span></td>
                <td>{val?.dest}</td>
                <td>{val?.discharge}</td>
                <td>{moment(val?.cargo).format('L')}</td>
                <td>{moment(val?.departure).format('L')}</td>
                <td>{val?.status}</td>
                <td>{val?.vessel}</td>
                <td>{moment(val?.created).format('L')}</td>
                <td>{val?.assignee}</td>
              </tr>
             </>
          }) : <tr><td colSpan={12}>Data Not Found</td></tr>
        }
  </tbody>
</table>
  </div>
</div>

    <div className="container-fluid middle">
  <div className="pagination">
      <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li className="active"><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
      </ul>

      <ul className="bottom-dropdown">
        <li><img src={headphone} width="20" style={{marginRight:"15px"}}/></li>
        <li>
          <select>
            <option>200</option>
            <option>1</option>
            <option>1</option>
          </select>
        </li>

      </ul>

  </div>
</div>
    
        </>
    )
}

export default Shipment

