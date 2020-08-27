import Axios from "axios";

import {
  BASE_URL,
  API_GET_PROMOS,
  API_ADD_PROMOS,
  API_EDIT_PROMOS,
  API_DELETE_PROMOS,
} from "../constants/ApisUrls";

export const getAllPromos = () => {
  return Axios.get(BASE_URL + API_GET_PROMOS)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addPromo = (payload) => {
  const { Promo } = payload;
  return Axios.post(BASE_URL + API_ADD_PROMOS, Promo)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editPromo = (payload) => {
  const { id, data } = payload;
  return Axios.put(BASE_URL + API_EDIT_PROMOS + id, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deletePromo = (payload) => {
  const {id} = payload;
  return Axios.delete(BASE_URL + API_DELETE_PROMOS + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
