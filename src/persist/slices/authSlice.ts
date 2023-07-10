import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'models';

const initialState: User = {
  id: '',
  name: '',
  email: '',
  token: '',
  lastName: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.password = action.payload.password;
      state.lastName = action.payload.lastName;
    },
    logOut: (state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.token = '';
      state.createdAt = new Date();
      state.updatedAt = new Date();
      state.password = '';
      state.lastName = '';
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: { auth: User }) => state.auth;
