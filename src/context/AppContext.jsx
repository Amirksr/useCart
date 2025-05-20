import { createContext, useReducer } from "react";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //code
    }
    case "INCREASE_IN_CART": {
      //code
    }
    case "DECREASE_IN_CART": {
      //code
    }
    case "REMOVE_FROM_CART": {
      //code
    }
    default: {
      return state;
    }
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
