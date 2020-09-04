import Axios from "axios";

import {
  BASE_URL,
  API_GET_PRODUCTS,
  API_ADD_PRODUCTS,
  API_EDIT_PRODUCTS,
  API_DELETE_PRODUCTS,
} from "../constants/ApisUrls";

export const getAllProducts = () => {
  return Axios.get(BASE_URL + API_GET_PRODUCTS)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addProduct = (payload) => {
  const { product } = payload;
  return Axios.post(BASE_URL + API_ADD_PRODUCTS, product)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editProduct = (payload) => {
  const { id, data } = payload;
  return Axios.put(BASE_URL + API_EDIT_PRODUCTS + id, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteProduct = (payload) => {
  const {id} = payload;
  return Axios.delete(BASE_URL + API_DELETE_PRODUCTS + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
