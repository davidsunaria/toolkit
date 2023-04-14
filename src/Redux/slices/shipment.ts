import {createAsyncThunk,  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { increment, incrementByAmount } from './count'
import { getData } from '../../api'
import type {} from 'redux-thunk/extend-redux'
import { IShipForm } from '../../interfaces'

export interface ShipingState {
  shipingList :any
}

export interface demo {
  type :number,
  payload:any,
  meta:any
}


const initialState: ShipingState = {
  shipingList:[]
}

export const shipmentData = createAsyncThunk(
  'shipment/shipmentData',
  async (userData: IShipForm) => {
    console.log("userData",userData)
    const response = await getData(userData)
    console.log("response",response)
    return response
  }
)

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
   
  },

  extraReducers:(builder:any)=>{
    builder.addCase(incrementByAmount,(state:any,action:any)=>{
       state.name=action.payload
    })
    builder.addCase(increment,(state:any)=>{
      state.name="name updated"
    })
    builder.addCase(shipmentData.pending, (state:any, action:PayloadAction<demo>) => {
      // Add user to the state array
      state.testingValue="please wait...."
      // toast("please wait .... ")
    })
    builder.addCase(shipmentData.fulfilled, (state:any, action:PayloadAction<demo>) => {
      // console.log("state",state.name)
      console.log("action",action)
      // Add user to the state array
      state.shipingList=action?.payload
      // toast("shipment successfully")
    })

  }
  
})

// Action creators are generated for each case reducer function
// export const { changeName } = shipmentSlice.actions

export default shipmentSlice.reducer