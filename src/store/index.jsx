import {configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist/es/constants';
import {persistedReducer} from './persistedReducer'


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false,
    })
});
const persistor = persistStore(store)

export {store, persistor}
