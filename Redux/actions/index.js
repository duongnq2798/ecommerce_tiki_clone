export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const ADD_CART_AFTER = 'ADD_CART_AFTER';
export const ADD_VIEW_PRODUCT = 'ADD_VIEW_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const DELETE_CART_VIEW = 'DELETE_CART_VIEW';
export const DELETE_PRODCUCT_PAURCHASED_LATER =
  'DELETE_PRODCUCT_PAURCHASED_LATER';
// あなた　は
export const CREATE_USER = 'CREATE_USER';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const WIPE_USER_DATA = 'WIPE_USER_DATA';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

import firestore from '@react-native-firebase/firestore';

let productListDetailt = [];
firestore()
  .collection('products_detail')
  .onSnapshot((querySnapshot) => {
    const products_detail = [];
    querySnapshot.forEach((documentSnapshot) => {
      products_detail.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });
    productListDetailt = [...products_detail];
  });

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    dispatch(GetAllProduct(productListDetailt));
  };
};

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: 'GET_ALL_PRODUCT',
    payload,
  };
}

export const actFetchUserRequest = () => {
  return (dispatch) => {
    dispatch(SaveUserData(users));
  };
};

export function SaveUserData(payload) {
  return {
    type: 'SAVE_USER_DATA',
    payload,
  };
}

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: 'GET_NUMBER_CART',
  };
}

export function AddCart(payload) {
  return {
    type: 'ADD_CART',
    payload,
  };
}

export function AddViewProduct(payload) {
  return {
    type: 'ADD_VIEW_PRODUCT',
    payload,
  };
}

export function AddCartAfter(payload) {
  return {
    type: 'ADD_CART_AFTER',
    payload,
  };
}

export function UpdateCart(payload) {
  return {
    type: 'UPDATE_CART',
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: 'DELETE_CART',
    payload,
  };
}

export function DeleteCartView(payload) {
  return {
    type: 'DELETE_CART_VIEW',
    payload,
  };
}
export function DeleteProductPurchasedLater(payload) {
  return {
    type: 'DELETE_PRODCUCT_PAURCHASED_LATER',
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  };
}

export const changeLanguage = (payload) => {
  return {
    type: 'CHANGE_LANGUAGE',
    payload,
  };
};
