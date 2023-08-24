import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: null,
        isError: false,
        isLoading: false,
        message: ""
    },
    reducers: {

    }
})

export const { } = itemsSlice.actions

export default itemsSlice.reducer