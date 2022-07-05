import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import StoreReducer from "./storeReducer";

const rootReducer = combineReducers({
    book: bookReducer,
    store: StoreReducer
});

export default rootReducer;