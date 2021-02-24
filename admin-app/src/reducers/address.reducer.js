import { addressConstants } from "../actions/constants";

const initState = {
  address: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case addressConstants.GET_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload,
      };
      break;

    default:
      return { ...state };
  }
  return state;
};
