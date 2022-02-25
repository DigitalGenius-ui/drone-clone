import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [
    {id: 1,
    img_url : "https://digitalgenius-ui.github.io/drone/images/home_3.png",
    name : "pierra",
    tagline : "alpha1",
    price : 299,
    disc : "pierra alpha1 EIS GPS Mini Drone 8K Camera 3-Axis Gimbal Professional Anti-Shake Quadcopter Kai1 Dron"
  },
  {
    id : 8,
    img_url : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-12321914/oem_2021-new-kai1-pro-drone-3-axis-gimbal-dual-camera-8k-hd-4k-video-quadcopter_full01.jpg",
    title : "Portable KAI ONE Pro8K",
    disc : "Portable KAI ONE Pro EIS GPS Mini Drone 8K Camera 3-Axis Gimbal Professional Anti-Shake Quadcopter Kai1 Dron",
    price : 318
  }
  
  ],
}

export const droneSlice = createSlice({
  name: 'drone',
  initialState,
  reducers: {
    addItems : (state, action) => {
      state = state.cart.push(action.payload);
    }
  },
})

export const { addItems } = droneSlice.actions

export default droneSlice.reducer