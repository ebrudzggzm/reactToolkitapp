import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import modalReducer from "./slices/modalSlice";

export default configureStore({
  reducer: { dataReducer,modalReducer }
});
