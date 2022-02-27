import { configureStore } from '@reduxjs/toolkit'
import { droneApi } from './fetchData';
import droneReducer from './slice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, droneReducer)


export const store = configureStore({
  reducer: {
    products : persistedReducer,
    [droneApi.reducerPath]: droneApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware(
    {
      serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }
  ).concat(droneApi.middleware),
});
