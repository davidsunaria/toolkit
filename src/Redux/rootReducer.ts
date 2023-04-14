import { combineReducers } from '@reduxjs/toolkit'
import {counterSlice} from "./slices/count"
import {shipmentSlice} from "./slices/shipment"

const rootReducer = combineReducers({
    counterReducer:counterSlice.reducer,
    shipmentReducer:shipmentSlice.reducer
})


export default rootReducer