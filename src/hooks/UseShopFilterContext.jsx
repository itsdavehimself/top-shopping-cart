import { ShopFilterContext } from '../context/FilterContext';
import { useContext } from 'react';

export const UseShopFilterContext = () => {
  const context = useContext(ShopFilterContext);

  if (!context) {
    throw Error(
      'UseShopFilterContext must be used inside a ShopFilterContextProvider',
    );
  }

  return context;
};
