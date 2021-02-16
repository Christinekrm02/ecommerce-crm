import {
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY_ID,
} from "../actions/types";

const INITIAL_STATE = {
  categories: [],
  productsSelected: [],
  products: [],
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SHOP_CATEGORIES:
      const categories = action.payload;

      return {
        ...state,
        categories,
      };
    case SET_SHOP_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FILTER_PRODUCTS_BY_CATEGORY_ID:
      console.log("FILTER_PRODUCTS_BY_CATEGORY_ID: ", action.payload);
      return {
        ...state,
        // selectedCategoryId
      };
    default:
      return state;
  }
}
