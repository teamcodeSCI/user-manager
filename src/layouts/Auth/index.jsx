import React, { useEffect } from 'react';
import style from './auth.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let title = '';
  switch (location.pathname) {
    case '/auth/login':
      title = 'Đăng nhập';
      break;
    case '/auth/register':
      title = 'Đăng ký';
      break;
    case '/auth/forgot-password':
      title = 'Quên mật khẩu';
      break;
    default:
      break;
  }
  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/');
  }, [navigate]);
  return (
    <div className={style['auth']}>
      <div className={style['img']}>
        <img width={224} height={222} src={`${process.env.PUBLIC_URL}/assets/images/favicon.png`} alt="" />
        <span>SCI Work</span>
      </div>
      <div className={style['title']}>{title}</div>
      <Outlet />
    </div>
  );
};

export default Auth;
