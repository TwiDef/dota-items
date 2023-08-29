import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './items/itemsSlice';
import itemSlice from './item/itemSlice';

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        item: itemSlice
    }
})