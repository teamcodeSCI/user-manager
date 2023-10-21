import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  loaded: false,
  userList: [],
  error: '',
};
const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.loading = true;
    },
    getAllUserSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.userList = action.payload;
    },
    getAllUserFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      switch (action.payload.response.status) {
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
    createUser: (state, action) => {
      state.loading = true;
    },
    createUserSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.userList.unshift(action.payload);
    },
    createUserFailure(state, action) {
      state.loading = false;

      switch (action.payload.response.status) {
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
  },
});
export default userListSlice;

export const loadingUserListSelector = (state) => state.userList.loading;
export const loadedUserListSelector = (state) => state.userList.loaded;
export const userListSelector = (state) => state.userList.userList;
export const errorUserListSelector = (state) => state.userList.error;
