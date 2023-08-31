"use client";
import  React from 'react'
import { persistor, store} from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

interface Iprops {
  children: React.ReactNode 
}

export function Providers({ children }: Iprops ) {
  return <Provider store={store}>
     <PersistGate persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>;
}