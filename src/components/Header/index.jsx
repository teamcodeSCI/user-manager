import React from 'react';
import style from './header.module.scss';

const Header = () => {
  return (
    <div className={style['header']}>
      <div className={style['logo']}>
        <img width={224} height={222} src={`${process.env.PUBLIC_URL}/assets/images/favicon.png`} alt="" />
        <span>SCI User Manager</span>
      </div>
      <div className={style['logout']}>
        <i className="icon-logout"></i>
        <span>Đăng xuất</span>
      </div>
    </div>
  );
};

export default Header;
