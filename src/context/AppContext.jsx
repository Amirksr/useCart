import { createContext, useReducer } from "react";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (
    action.type
    //code
  ) {
  }
};

function AppProvider({ children }) {
  const initialState = { addedToCart: 0, addedProducts: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
