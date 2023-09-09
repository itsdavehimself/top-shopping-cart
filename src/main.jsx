import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import ShopPage from './components/ShopPage/ShopPage.jsx';
import Cart from './components/ShoppingCart/Cart.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
