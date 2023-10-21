import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  loaded: false,
  currentUser: null,
  error: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.currentUser = null;
      localStorage.clear();
    },
    register(state) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.error = '';
      state.currentUser = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      switch (action.payload.response.status) {
        case 500:
          state.error = action.payload.response.data.message.errorInfo[2];
          break;
        case 400:
          state.error = action.payload.response.data.message.c_password[0];
          break;
        default:
          state.error = '';
      }
    },
    login(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.error = '';
      state.currentUser = action.payload;
      localStorage.setItem('token', action.payload.data.data.token);
    },
    loginFailure(state, action) {
      console.log('action: ', action);
      state.loading = false;
      state.loaded = false;
      if (action.payload.code === 'ERR_NETWORK') {
        state.error = 'Lỗi kết nối';
        return;
      }
      switch (action.payload.response?.status) {
        case 500:
          state.error = action.payload.response.data.message.errorInfo[2];
          break;
        case 401:
          state.error = action.payload.response.data.message;
          break;
        default:
          state.error = '';
      }
    },
    getUser(state) {
      state.loading = true;
    },
    getUserSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.currentUser = action.payload;
    },
    getUserFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      localStorage.clear();
      window.location.reload();
    },
  },
});
export default authSlice;
export const loadingAuthSelector = (state) => state.auth.loading;
export const loadedAuthSelector = (state) => state.auth.loaded;
export const errorAuthSelector = (state) => state.auth.error;
export const currentUserSelector = (state) => state.auth.currentUser;
