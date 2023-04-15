import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../Redux/rootReducer";
import { shipmentData } from "../../Redux/slices/shipment";
import { RootState } from "../../Redux/store";
import file from "../../img/file.png"
import logo from "../../img/logo.png"
import noti from "../../img/noti.png"
import setting from "../../img/setting.png"
import ellipsis from "../../img/three-ellipsis.png"
import headphone from "../../img/headphones.png"
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
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
    <tr>
      <th scope="row"><input className="form-check-input" type="checkbox"/></th>
      <td><img src={ellipsis} style={{width:"15px"}}/></td>
      <td>2016/000008S</td>
      <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">South American Beef Inc</span></td>
      <td>China</td>
      <td>Busan</td>
      <td>16/03/2022</td>
      <td>16/03/2022</td>
      <td>Complete</td>
      <td>MSC ROMA 009</td>
      <td>16/03/2022</td>
      <td>Ashwani Kumar</td>
    </tr>
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



