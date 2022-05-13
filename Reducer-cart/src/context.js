import React, { useState, useContext, useReducer, useEffect } from 'react'
import { useFetch } from './useFetch';
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const DATA = useFetch(url);
  return (
    <AppContext.Provider value={{ DATA }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }