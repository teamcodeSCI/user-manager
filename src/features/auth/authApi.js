import http from '@/app/http';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserAPI = createAsyncThunk(
  'auth/getUser',
  async () => await http.get('/auth/get-user', { headers: { Authorization: localStorage.getItem('token') } }),
);
export const loginAPI = createAsyncThunk(
  'auth/login',
  async (body) => await http.post('/auth/login', JSON.stringify({ email: body.email, password: body.password })),
);
export const register = createAsyncThunk(
  'auth/register',
  async (body) =>
    await http.post(
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
    ),
);
