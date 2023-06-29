import { createSlice } from '@reduxjs/toolkit';

import { SEARCH_DEFAULT_INITIAL_STATE } from './search.state';

export const searchSlice = createSlice({
  name: 'search',
  initialState: SEARCH_DEFAULT_INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    }
  }
});

export const searchReducer = searchSlice.reducer;

export const { setFilter } = searchSlice.actions;
