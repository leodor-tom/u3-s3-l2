import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
// import mainReducer from '../reducers'

const persistConfig = {
  key: "root",
  storage,
  blacklist: [`jobs`],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
