import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
    name: 'description',
    initialState: {d: ""},
    reducers: {
        setDescription: (state, action)=>{
            state.d = action.payload;
        }
    }
})

export const {setDescription} = descriptionSlice.actions;
export default descriptionSlice.reducer;