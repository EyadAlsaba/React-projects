/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer, useState, } from 'react'

import reducer from './reducer';


const AppContext = React.createContext();

const url = 'https://course-api.com/react-useReducer-cart-project';

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  REMOVE: 'remove',
  RESET: 'reset',
  DISPLAY_ITEMS: 'display_items'
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
    cart: [], amount: 0, total: 0, loading: true
  });


  const fetchData = async () => {
    const response = await fetch(url)
    const cart = await response.json()
    const amount = cart.reduce((a, b) => { return a + b.amount }, 0);
    const total = cart.reduce((a, b) => { return a + parseFloat(b.price) }, 0);
    dispatch({ type: ACTIONS.DISPLAY_ITEMS, payload: { cart, amount, total, loading: false } })
  }

  useEffect(() => {
    fetchData()
  }, [])


  function increase(item) {
    item.amount += 1
    dispatch({ type: ACTIONS.INCREMENT, payload: item })
  }

  function decrease(item) {
    if (item.amount === 1) {
      return;
    }
    item.amount -= 1;
    dispatch({ type: ACTIONS.DECREMENT, payload: item })
  }

  function reset() {
    dispatch({ type: ACTIONS.RESET })
  }

  function remove(item) {
    dispatch({ type: ACTIONS.REMOVE, payload: item })
  }

  return (
    <AppContext.Provider value={{ state, increase, decrease, reset, remove }}>
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }


