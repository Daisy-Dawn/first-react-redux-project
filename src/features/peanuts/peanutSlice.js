import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfRibbons: 50,
    numberOfPeanuts: 30,
}

const peanutSlice = createSlice({
    name: "peanut",
    initialState,
    reducers: {
       peanutOrdered: (state, action) => {
        state.numberOfPeanuts -= action.payload
        state.numberOfRibbons -= action.payload * 3
       },
       peanutRestocked: (state, action) => {
        state.numberOfPeanuts += action.payload
        state.numberOfRibbons += action.payload * 3
       }
    }
})

export default peanutSlice.reducer
export const {peanutOrdered, peanutRestocked} = peanutSlice.actions