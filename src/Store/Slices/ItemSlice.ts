import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStreamableItem } from '../../Types/IStreamableItem'

export const rows: IStreamableItem[] = [
  {
    name: "0",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "1",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "2",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "3",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "4",
    percentage: 54.3,
    value: 1323.21,
  },
];

export interface ItemsState {
  data: IStreamableItem[],
  objData: { [name: string]: IStreamableItem }
}

const initialState: ItemsState = {
  data: rows,
  objData: rows.reduce((acc, val) => ({
    ...acc,
    [val.name]: val,
  }), {})
}

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItem: (state, action: PayloadAction<IStreamableItem>) => {
      const itemIndex = state.data.findIndex((item) => item.name === action.payload.name);
      state.data[itemIndex] = action.payload;
      state.objData[action.payload.name] = action.payload;
    },
    setItems: (state, action: PayloadAction<IStreamableItem[]>) => {
      state.data = action.payload;
    },
 
  },
})

export const { updateItem, setItems } = itemSlice.actions
export default itemSlice.reducer