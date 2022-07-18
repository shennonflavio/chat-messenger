/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

const appOptionsSlice = createSlice({
  name: '@appOptions',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    appOptionsToggleTheme: (draft) => {
      draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { appOptionsToggleTheme } = appOptionsSlice.actions;
export const appOptionsReducer = appOptionsSlice.reducer;
