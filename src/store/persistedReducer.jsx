import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'chat-messenger',
  version: 1,
  storage,
  whitelist: [ 'appOptions'],
  // blacklist: ['api'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
