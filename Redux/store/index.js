import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
// Middle ware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store, persistor};
