import React, { createContext, useReducer, useContext} from "react";

//prepare for data layer
const StateContext = createContext();

//wrap the App.js inside StateProvider to provide data
const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//use to pull data from data layer 
const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue }