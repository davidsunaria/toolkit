import React, { FC, Fragment, ReactNode ,useEffect} from "react";
import Header from '../layouts/Header';
import {Spinner,Alert} from 'react-bootstrap';
import { RootState } from "../Redux/store";
import { setLoading } from "../Redux/slices/shipment";
import { useSelector, useDispatch } from "react-redux";
interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state?.shipmentReducer?.isLoading);
  const promiseReject = useSelector((state: RootState) => state?.shipmentReducer?.promiseReject);
  useEffect(()=>{
    dispatch(setLoading()) 
  },[])
  return (
      <Fragment>
         <Header/> 
         {children} 
        {
          isLoading ? <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>:null
        } 
       {
        promiseReject?<Alert key={"danger"} variant={"danger"}>
        Something went wrong with api
      </Alert>:null
       }  
      </Fragment>
  )
}

export default Layout;