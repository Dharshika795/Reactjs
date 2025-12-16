import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ADD_TO_CART } from './src/redux/redux/redux/cartAction'

export const addToCart =() => {
  return{
    type : ADD_TO_CART,
    payLoad:Product,
  };
};

export const removeFromcart =(id) => {
  return{
    type:REMOVE_FROM_CART,
    payLoad:id,
  };
};