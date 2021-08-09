import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IStreamableItem from '../../Types/IStreamableItem'

export interface ItemsState {
  data: { [name: string]: IStreamableItem }
}

const initialState: ItemsState = {
  data: {}
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItem: (state, action: PayloadAction<IStreamableItem>) => {
      state.data[action.payload.name] = action.payload;
    },
    setItems: (state, action: PayloadAction<IStreamableItem[]>) => {
      state.data = action.payload.reduce((acc, val) => ({
        ...acc,
        [val.name]: val,
      }), {})
    },
  },
})

export const { updateItem, setItems } = itemSlice.actions
export default itemSlice.reducer