import { galleryConstants } from "../actions/constants";

const initState = {
  galleryImages: [],
  loading: false,
  error: null,
};

const buildNewGallery = (galleries, galleryInfo) => {
  let myGallery = [];

  const newGallery = {
    _id: galleryInfo._id,
    name: galleryInfo.name,
    slug: galleryInfo.slug,
    img: galleryInfo.galleryImage,
  };
  myGallery.push({
    ...galleries,
    newGallery,
  });

  return myGallery;
};

export default (state = initState, action) => {
  switch (action.type) {
    case galleryConstants.ADD_GALLERY_CREATE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case galleryConstants.ADD_GALLERY_CREATE_SUCCESS:
      const galleryInfo = action.payload.gallery;
      const updatedGalleryInfo = buildNewGallery(
        state.galleryImages,
        galleryInfo
      );
      state = {
        ...state,
        galleryImages: updatedGalleryInfo,
        loading: false,
      };
      break;
    case galleryConstants.ADD_GALLERY_CREATE_FAILURE:
      state = {
        ...initState,
        loading: false,
        error: action.payload,
      };
      break;
    case galleryConstants.GET_GALLERY_SUCCESS:
      state = {
        ...state,
        galleryImages: action.payload,
      };
      break;
    case galleryConstants.DELETE_GALLERY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case galleryConstants.DELETE_GALLERY_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case galleryConstants.DELETE_GALLERY_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return { ...state };
  }

  return state;
};
