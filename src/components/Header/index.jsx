import React from 'react';
import style from './header.module.scss';
import { useDispatch } from 'react-redux';
import authSlice from '@/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={style['header']}>
      <div className={style['logo']}>
        <img width={224} height={222} src={`${process.env.PUBLIC_URL}/assets/images/favicon.png`} alt="" />
        <span>SCI User Manager</span>
      </div>
      <div
        className={style['logout']}
        onClick={() => {
          dispatch(authSlice.actions.logout());
          navigate('/auth');
        }}
      >
        <i className="icon-logout"></i>
        <span>Đăng xuất</span>
      </div>
    </div>
  );
};

export default Header;
