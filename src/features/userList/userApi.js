import http from '@/app/http';
import userListSlice from './userSlice';

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(userListSlice.actions.getAllUser());
    try {
      const data = await http.get('/get-all-user', { headers: { Authorization: localStorage.getItem('token') } });
      dispatch(userListSlice.actions.getAllUserSuccess(data.data.data));
    } catch (error) {
      dispatch(userListSlice.actions.getAllUserFailure(error));
    }
  };
};
export const createUser = (body) => {
  return async (dispatch) => {
    dispatch(userListSlice.actions.createUser());
    try {
      const data = await http.post(
        '/create-user',
        JSON.stringify({
          first_name: body.firstName,
          last_name: body.lastName,
          birthday: body.birthday,
          email: body.email,
          phone: body.phone,
          password: '1',
          c_password: '1',
        }),
        { headers: { Authorization: localStorage.getItem('token') } },
      );
      dispatch(userListSlice.actions.createUserSuccess(data.data.data));
    } catch (error) {
      dispatch(userListSlice.actions.createUserFailure(error));
    }
  };
};
