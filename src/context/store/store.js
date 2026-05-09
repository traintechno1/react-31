import { configureStore } from "@reduxjs/toolkit";
import descriptionReducer from "./descriptionSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer:{
        description: descriptionReducer,
        counter: counterReducer
    }
});