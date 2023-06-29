import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './modules/search/search.reducer';
import api from './api/api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    searchReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

export default store;
