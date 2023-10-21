import http from '@/app/http';

import authSlice from './authSlice';

export const getUser = (body) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.getUser());
    try {
      const data = await http.get('/auth/get-user', { headers: { Authorization: localStorage.getItem('token') } });
      dispatch(authSlice.actions.getUserSuccess(data));
    } catch (error) {
      dispatch(authSlice.actions.getUserFailure(error));
    }
  };
};
export const login = (body) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.login());
    try {
      const data = await http.post('/auth/login', JSON.stringify({ email: body.email, password: body.password }));
      dispatch(authSlice.actions.loginSuccess(data));
    } catch (error) {
      dispatch(authSlice.actions.loginFailure(error));
    }
  };
};
export const register = (body) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.register());
    try {
      const data = await http.post(
        '/auth/register',
        JSON.stringify({
          first_name: body.firstName,
          last_name: body.lastName,
          birthday: body.birthday,
          email: body.email,
          phone: body.phone,
          role: body.role,
          password: body.password,
          c_password: body.rePassword,
        }),
      );
      dispatch(authSlice.actions.registerSuccess(data));
    } catch (error) {
      dispatch(authSlice.actions.registerFailure(error));
    }
  };
};
