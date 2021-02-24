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
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getAllGallery = () => {
  return async (dispatch) => {
    dispatch({ type: galleryConstants.GET_GALLERY_REQUEST });
    const res = await axios.get(`/gallery/getImages`);
    console.log(res);
    if (res.status === 200) {
      const { galleryList } = res.data;
      dispatch({
        type: galleryConstants.GET_GALLERY_SUCCESS,
        payload: { galleryImages: galleryList },
      });
    } else {
      dispatch({
        type: galleryConstants.GET_GALLERY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
