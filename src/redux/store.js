import { configureStore } from '@reduxjs/toolkit'
import { droneApi } from './fetchData';
import droneReducer from './slice';

export const store = configureStore({
  reducer: {
    products : droneReducer,
    [droneApi.reducerPath]: droneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(droneApi.middleware),
});
