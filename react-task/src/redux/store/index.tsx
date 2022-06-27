import { applyMiddleware, legacy_createStore} from "redux";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middleware)
))

export const persistor = persistStore(store)

export default store; 