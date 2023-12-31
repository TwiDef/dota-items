import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itemsService from '../sevises/itemsService';

export const getItem = createAsyncThunk('GET_ITEM', async (id, thunkAPI) => {
    try {
        return await itemsService.getItem(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createItem = createAsyncThunk('CREATE_ITEM', async (itemData, thunkAPI) => {
    try {
        return await itemsService.createItem(itemData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        item: null,
        isError: false,
        isLoading: false,
        message: "",
        errors: null
    },
    reducers: {
        resetItemErrors: (state) => {
            state.errors = null
        }
    },
    extraReducers: (builder) => {
        /***************************/
        builder.addCase(getItem.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.item = action.payload[0]
        })
        builder.addCase(getItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.item = null
        })
        /***************************/

        /***************************/
        builder.addCase(createItem.pending, (state) => {
            state.isLoading = true
            state.errors = null
        })
        builder.addCase(createItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.errors = null
        })
        builder.addCase(createItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.errors = action.payload
        })
        /***************************/

    }
})

export const { resetItemErrors } = itemSlice.actions

export default itemSlice.reducer