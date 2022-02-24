import { configureStore } from '@reduxjs/toolkit'
import { droneApi } from './fetchData';

export const store = configureStore({
  reducer: {
    [droneApi.reducerPath]: droneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(droneApi.middleware),
});
