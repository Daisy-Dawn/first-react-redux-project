import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfIceCream: 20,
    numberOfCones: 40,
}

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        iceCreamOrdered: (state, action) => {
            state.numberOfIceCream -= 1;
            state.numberOfCones -= 2
        },
        iceCreamRestocked: (state, action) => {
            state.numberOfIceCream += action.payload,
            state.numberOfCones += action.payload * 2
        }
    }
})

export default iceCreamSlice.reducer
export const {iceCreamOrdered, iceCreamRestocked} = iceCreamSlice.actions