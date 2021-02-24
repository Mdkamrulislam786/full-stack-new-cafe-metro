import {
  categoryConstansts,
  productConstants,
  orderConstants,
  galleryConstants,
  addressConstants,
} from "./constants";
import axios from "../helpers/axios";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products, orders, address, gallery } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
      dispatch({
        type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
        payload: { orders },
      });
       dispatch({
         type: galleryConstants.GET_GALLERY_SUCCESS,
         payload: { gallery },
       });
       dispatch({
         type: addressConstants.GET_ADDRESS_SUCCESS,
         payload: { address },
       });
    }
    console.log(res);
  };
};
