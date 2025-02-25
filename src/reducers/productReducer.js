// File: src/reducers/productReducer.js
export const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  export const productReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_START':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case 'FETCH_PRODUCTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        };
      default:
        return state;
    }
  };