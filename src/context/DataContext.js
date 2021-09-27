import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const defaultState = {
    currentPage: 1,
    currentRadio: null,
    currentCocktails: [],
  };
  const reducer = (value, prop) => {
    return { ...value, ...prop };
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <DataContext.Provider value={{ data: state, action: dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataContext;
