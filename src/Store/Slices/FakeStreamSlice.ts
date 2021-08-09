import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StreamState {
  numItems: number,
  updateIntervalMs: number,
}

const initialState: StreamState = {
  numItems: 10,
  updateIntervalMs: 500,
}

export const itemSlice = createSlice({
  name: 'fake-stream',
  initialState,
  reducers: {
    setStreamState: (state, action: PayloadAction<StreamState>) => {
      state.numItems = action.payload.numItems;
      state.updateIntervalMs = action.payload.updateIntervalMs;
    }
  },
})

export const { setStreamState } = itemSlice.actions
export default itemSlice.reducer