import shoppingReducers from "./shoppingReducers";
import  { combineReducers } from "redux";
import totalAreaCategories from "./TotalAreaCategory";
import areaCategorySelector from "./selectAreaCategory";

const rootReducer = combineReducers({
    user: shoppingReducers,
    selectAreaaCategoryy: areaCategorySelector,
    totalAreaCategories: totalAreaCategories
})

export default rootReducer;