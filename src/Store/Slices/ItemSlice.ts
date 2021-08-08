import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStreamableItem } from '../../Types/IStreamableItem'

export interface ItemsState {
  objData: { [name: string]: IStreamableItem }
}

const initialState: ItemsState = {
  objData: {}
}
export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItem: (state, action: PayloadAction<IStreamableItem>) => {
      state.objData[action.payload.name] = action.payload;
    },
    setItems: (state, action: PayloadAction<IStreamableItem[]>) => {
      
      state.objData = action.payload.reduce((acc, val) => ({
        ...acc,
        [val.name]: val,
      }), {})
    },

  },
})

export const { updateItem, setItems } = itemSlice.actions
export default itemSlice.reducer