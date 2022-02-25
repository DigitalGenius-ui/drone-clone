import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  like: [
    {id: 1,
    img_url : "https://digitalgenius-ui.github.io/drone/images/home_3.png",
    name : "pierra",
    tagline : "alpha1",
    price : 299,
    disc : "pierra alpha1 EIS GPS Mini Drone 8K Camera 3-Axis Gimbal Professional Anti-Shake Quadcopter Kai1 Dron"
  }
  ],
}

export const likeSlice = createSlice({
  name: 'droneLike',
  initialState,
  reducers: {
    addItems : (state, action) => {
      state.cart = state.cart.push(state.action);
    }
  },
})

export const { addItems } = likeSlice.actions

export default likeSlice.reducer