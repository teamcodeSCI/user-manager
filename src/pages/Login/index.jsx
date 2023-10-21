import React, { useEffect, useState } from 'react';
import style from './login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { pressEnter, validateEmail } from '@/utils/help';
import Notice from '@/components/Notice';
import Loading from '@/components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/features/auth/authApi';
import { currentUserSelector, errorAuthSelector, loadingAuthSelector } from '@/features/auth/authSlice';

const Login = () => {
  const errorlogin = useSelector(errorAuthSelector);
  const loginLoading = useSelector(loadingAuthSelector);
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [notify, setNotify] = useState('');
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const clickLogin = () => {
    if (loginData.email === '' || loginData.password === '') {
      setNotify('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (!validateEmail(loginData.email)) {
      setNotify('Email không hợp lệ !');
      return;
    }
    dispatch(login(loginData));
  };
  const handleClose = () => {
    setNotify('');
  };
  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/');
  }, [navigate, currentUser]);
  return (
    <div className={style['login']}>
      {loginLoading && <Loading />}
      {notify !== '' && <Notice notice={notify} close={handleClose} />}
      {errorlogin !== '' && <Notice notice={errorlogin} close={handleClose} />}
      <div className={style['form']}>
        <div className={style['input']}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onKeyDown={(e) => pressEnter(e, clickLogin)}
            value={loginData.email}
            onChange={handleLogin}
          />
        </div>
        <div className={style['input']}>
          <label htmlFor="password">
            Mật khẩu <Link to={'/auth/forgot-password'}>Quên mật khẩu?</Link>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onKeyDown={(e) => pressEnter(e, clickLogin)}
            value={loginData.password}
            onChange={handleLogin}
          />
        </div>
        <div className={style['btn']}>
          <button onClick={clickLogin}>Đăng nhập</button>
        </div>
      </div>
      <div className={style['register']}>
        <Link to={'/auth/register'}>Đăng ký bằng SCI Email tại đây!</Link>
      </div>
    </div>
  );
};

export default Login;
