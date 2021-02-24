import axios from "../helpers/axios";
import { galleryConstants } from "./constants";

const getAllGallery = () => {
  return async (dispatch) => {
    dispatch({ type: galleryConstants.GET_GALLERY_REQUEST });
    const res = await axios.get(`/gallery/getImages`);
    console.log(res);
    if (res.status === 200) {
      const { galleryList } = res.data;
      dispatch({
        type: galleryConstants.GET_GALLERY_SUCCESS,
        payload: { galleryList },
      });
    } else {
      dispatch({
        type: galleryConstants.GET_GALLERY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addGalleryImg = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: galleryConstants.ADD_GALLERY_CREATE_REQUEST });
      const res = await axios.post(`/gallery/create`, form);
      if (res.status === 201 ?? 204) {
        dispatch({
          type: galleryConstants.ADD_GALLERY_CREATE_SUCCESS,
          payload: { gallery: res.data.gallery },
        });
        // dispatch(getAllGallery());
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

export const deleteGalleryImg = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/gallery/deleteImage`, {
        payload: {
          productId: id,
        },
      });
      dispatch({ type: galleryConstants.DELETE_GALLERY_REQUEST });
      if (res.status === 202 ?? 204) {
        dispatch(getAllGallery());
        dispatch({ type: galleryConstants.DELETE_GALLERY_SUCCESS });
      } else {
        const { error } = res.data;
        dispatch({
          type: galleryConstants.DELETE_GALLERY_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export { getAllGallery };
