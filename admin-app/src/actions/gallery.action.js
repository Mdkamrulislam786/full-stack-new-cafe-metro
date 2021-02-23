import axios from "../helpers/axios";
import { galleryConstants } from "./constants";

export const addGalleryImg = (form) => {
  return async (dispatch) => {
    dispatch({ type: galleryConstants.ADD_GALLERY_CREATE_REQUEST });
    try {
      const res = await axios.post(`/gallery/create`, form);
      if (res.status === 201) {
        dispatch({
          type: galleryConstants.ADD_GALLERY_CREATE_SUCCESS,
          payload: { gallery: res.data.gallery },
        });
      } else {
        dispatch({
          type: galleryConstants.ADD_GALLERY_CREATE_FAILURE,
          payload: res.data.error,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
