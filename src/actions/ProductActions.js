import { PRODUCT_GET, PRODUCT_ADD, PRODUCT_DELETE } from "../constants";

export const getProducts = () => {
  return {
    type: PRODUCT_GET,
  };
};

export const addProduct = (product) => {
  return {
    type: PRODUCT_ADD,
    product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: PRODUCT_DELETE,
    id,
  };
};
