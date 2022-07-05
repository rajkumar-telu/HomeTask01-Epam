import { ADD_ORDER, ADD_TO_CART, EMPTY_CART, UPDATE_MY_ADDRESS } from "../actions/type";

const initialState = {
  cart: [],
  orders: [],
  address: {
    'HNo': '1725',
    'Street': 'Slough Avenue',
    'City': 'Scranton',
    'State': 'PA',
  }
};

const StoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, ...action.payload],
      };
    case UPDATE_MY_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default StoreReducer;
