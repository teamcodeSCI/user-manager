import React, { useEffect, useState } from 'react';
import style from './register.module.scss';
import { Link } from 'react-router-dom';
import Notice from '@/components/Notice';
import Loading from '@/components/Loading';
import { pressEnter, validateEmail } from '@/utils/help';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/features/auth/authApi';
import { errorAuthSelector, loadedAuthSelector, loadingAuthSelector } from '@/features/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(errorAuthSelector);
  const registerLoaded = useSelector(loadedAuthSelector);
  const registerLoading = useSelector(loadingAuthSelector);
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    password: '',
    role: 'ADMIN',
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
      registerData.birthday === '' ||
      registerData.phone === '' ||
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
    dispatch(register(registerData));
  };
  const handleClose = () => {
    setNotify('');
  };
  useEffect(() => {
    if (registerLoaded) window.location.assign('/auth/login');
  }, [registerLoaded]);
  return (
    <div className={style['register']}>
      {registerLoading && <Loading />}
      {notify !== '' && <Notice notice={notify} close={handleClose} />}
      {errorRegister !== '' && <Notice notice={errorRegister} close={handleClose} />}
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
          <label htmlFor="birthday">Ngày sinh</label>
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={registerData.birthday}
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
          <label htmlFor="phone">Số điện thoại</label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="0123456789"
            onKeyDown={(e) => pressEnter(e, clickRegister)}
            value={registerData.phone}
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
