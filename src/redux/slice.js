import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const droneSlice = createSlice({
  name: 'drone',
  initialState,
  reducers: {
  },
})

// export const {  } = counterSlice.actions

export default droneSlice.reducer