import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Settings } from 'models';

const initialState: Settings = {
  currentTheme: 'light',
  sidebarOpen: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.currentTheme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setTheme, toggleSidebar } = settingsSlice.actions;

export default settingsSlice.reducer;

export const selectSettings = (state: { settings: Settings }) => state.settings;
