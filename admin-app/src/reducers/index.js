import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./order.reducer";
import pageReducer from "./page.reducer";
import galleryReducer from "./gallery.reducer";
import { combineReducers } from "redux";
import addressReducer from "./address.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
  page: pageReducer,
  gallery: galleryReducer,
  address: addressReducer,
});

export default rootReducer;
