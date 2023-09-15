import { combineReducers } from '@reduxjs/toolkit'
import {shipmentSlice} from "./slices/shipment"

const rootReducer = combineReducers({
    shipmentReducer:shipmentSlice.reducer
})


export default rootReducer