import React, { createContext, useContext, useReducer } from 'react';

//Prepares the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) =>(
   <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
   </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);

//Video Part3 01:27:40