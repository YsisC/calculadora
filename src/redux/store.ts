import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './features/calculatorSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { chuckNorrisApi } from "./services/chuckNorrisApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, calculatorReducer)
  
export const store = configureStore({
    reducer: {
        calculator: persistedReducer,
        [chuckNorrisApi.reducerPath]: chuckNorrisApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([chuckNorrisApi.middleware])
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;