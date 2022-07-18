import { combineReducers } from 'redux';
// import { apiReducer, apiReducerPath } from './slices/apiSlice';
import { appOptionsReducer } from './slices/appOptionsSlice';
// import { authReducer } from './slices/authSlice';
// import { rechargeReducer } from './slices/rechargeSlice';

export const rootReducer = combineReducers({
  // [apiReducerPath]: apiReducer,
  // auth: authReducer,
  // recharge: rechargeReducer,
  appOptions: appOptionsReducer,
});
