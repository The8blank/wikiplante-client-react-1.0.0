import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/index.scss";
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
  key: 'main-root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
})

const Persistor= persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}> 
    <PersistGate loading={null} persistor={Persistor}>
    <App />
      </PersistGate>     
    </Provider>
  </React.StrictMode>
);
