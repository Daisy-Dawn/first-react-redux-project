import { iceCreamOrdered } from '../icecream/iceCreamSlice';
import { peanutOrdered } from '../peanuts/peanutSlice';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numberOfCakes -= action.payload
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(iceCreamOrdered, (state) => {
            state.numberOfCakes -= 1
        })
    }
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions