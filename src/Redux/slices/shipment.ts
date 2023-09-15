import {createAsyncThunk,  createSlice ,current } from '@reduxjs/toolkit'
import type { PayloadAction,ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getData,deleteData } from '../../api'
import type {} from 'redux-thunk/extend-redux'
import { IShipForm , ITableData, ShipingState ,IActionPayload} from '../../interfaces'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const initialState: ShipingState = {
  shipingList:[],
  isLoading:false,
  promiseReject:false
}

export const shipmentData = createAsyncThunk(
  'shipment/shipmentData',
  async (shipQuery: IShipForm) => {
    const response = await getData(shipQuery)
    return response
  }
)

export const deleteShipmentData = createAsyncThunk(
  'shipment/shipmentData/delete',
  async (shipQuery: IShipForm) => {
    const response = await deleteData(shipQuery)
    return response
  }
)

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setLoading:(state)=>{
      state.isLoading=true
    }
  },
 
  extraReducers:(builder:any)=>{
    builder.addCase(shipmentData.pending, (state:ShipingState, action:PayloadAction<IShipForm>) => {
      state.isLoading=true
      state.promiseReject=false
    })
    builder.addCase(shipmentData.fulfilled,  (state:ShipingState, action:PayloadAction<IShipForm>) => {
      state.shipingList=action?.payload
      state.isLoading=false
      state.promiseReject=false
    })

    builder.addCase(shipmentData.rejected, (state:ShipingState, action:PayloadAction<IShipForm>) => {
      state.isLoading=false
      state.promiseReject=true
      toast.success("api failed");
    })

    builder.addCase(deleteShipmentData.pending, (state:ShipingState, action:PayloadAction<IShipForm>) => {
      state.promiseReject=false
    })
    builder.addCase(deleteShipmentData.fulfilled, (state:ShipingState, action:PayloadAction<IShipForm>) => {
      let filterData =  current(state)?.shipingList?.filter((data:ITableData,i:number)=>{
        if(data?.id!==action?.payload?.id){
         return true
        }
   }
   )
      state.shipingList=filterData
      toast.success("Data Deleted");
      state.promiseReject=false
    })

    builder.addCase(deleteShipmentData.rejected, (state:ShipingState, action:PayloadAction<IShipForm>) => {
      state.promiseReject=true
      toast.success("api failed");
    })
  }
  
})

// Action creators are generated for each case reducer function
 export const { setLoading} = shipmentSlice.actions

export default shipmentSlice.reducer