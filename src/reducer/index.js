import listReducer from "./listReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    listReducer
})

export default rootReducer