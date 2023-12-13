import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ShopFilterContext = createContext();

export const ShopFilterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const ShopFilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopFilterReducer, {
    filter:
      '(search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card)',
  });

  return (
    <ShopFilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShopFilterContext.Provider>
  );
};

ShopFilterContextProvider.propTypes = {
  children: PropTypes.array,
};
