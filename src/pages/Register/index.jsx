import React, { useState } from 'react';
import style from './register.module.scss';
import { Link } from 'react-router-dom';
import Notice from '@/components/Notice';
import Loading from '@/components/Loading';
import { pressEnter, validateEmail } from '@/utils/help';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',

    password: '',
    rePassword: '',
  });
  const [notify, setNotify] = useState('');

  const handleRegister = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const clickRegister = () => {
    if (
      registerData.firstName === '' ||
      registerData.lastName === '' ||
      registerData.email === '' ||
      registerData.password === '' ||
      registerData.rePassword === ''
    ) {
      setNotify('Vui lòng nhập đủ thông tin');
      return;
    }
    if (!validateEmail(registerData.email)) {
      setNotify('Email không hợp lệ !');
      return;
    }
  };
  const handleClose = () => {
    setNotify('');
  };
  // useEffect(() => {
  //   dispatch(fetchPosition());
  //   if (registerLoaded) window.location.assign(APP_URL + '/auth/login');
  // }, [dispatch, registerLoaded, navigate]);
  return (
    <div className={style['register']}>
      {(false || false) && <Loading />}
      {notify !== '' && <Notice notice={notify} close={handleClose} />}
      <div className={style['form']}>
        <div className={style['input']}>
          <label htmlFor="firstName">Họ và tên đệm</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Nguyễn Văn"
            value={registerData.firstName}
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            onChange={handleRegister}
          />
        </div>
        <div className={style['input']}>
          <label htmlFor="lastName">Tên</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="A"
            value={registerData.lastName}
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            onChange={handleRegister}
          />
        </div>

        <div className={style['input']}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            value={registerData.email}
            onChange={handleRegister}
          />
        </div>
        <div className={style['input']}>
          <label htmlFor="password">Mật khẩu</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            value={registerData.password}
            onChange={handleRegister}
          />
        </div>
        <div className={style['input']}>
          <label htmlFor="rePassword">Nhập lại mật khẩu</label>
          <input
            id="rePassword"
            type="password"
            name="rePassword"
            placeholder="Nhập lại mật khẩu"
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            value={registerData.rePassword}
            onChange={handleRegister}
          />
        </div>

        <div className={style['btn']}>
          <button onClick={clickRegister}>Đăng ký</button>
        </div>
      </div>
      <div className={style['login']}>
        <Link to={'/auth/login'}>Quay lại trang đăng nhập</Link>
      </div>
    </div>
  );
};

export default Register;
