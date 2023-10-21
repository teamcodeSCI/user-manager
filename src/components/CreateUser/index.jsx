import React, { useEffect, useRef, useState } from 'react';
import style from './createUser.module.scss';
import { useOutside } from '@/utils/help';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '@/features/userList/userApi';
import { errorUserListSelector, loadingUserListSelector } from '@/features/userList/userSlice';
import Loading from '../Loading';

const CreateUser = ({ hide, isCreate }) => {
  const dispatch = useDispatch();
  const errorServer = useSelector(errorUserListSelector);
  const loadingUser = useSelector(loadingUserListSelector);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', birthday: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const handleNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const saveUser = () => {
    if (
      newUser.firstName === '' ||
      newUser.lastName === '' ||
      newUser.birthday === '' ||
      newUser.email === '' ||
      newUser.phone === ''
    ) {
      setError('Vui lòng nhập đầy đủ thông tin !');
      return;
    }
    dispatch(createUser(newUser));
    hide();
  };

  const modalRef = useRef(null);
  useOutside(modalRef, hide);
  useEffect(() => {
    if (error === '' && errorServer === '' && !isCreate) {
      hide();
    }
  }, [error, errorServer, hide, isCreate]);
  return (
    <div className={style['createUser']}>
      <div className={style['box']} ref={modalRef}>
        {loadingUser && <Loading />}
        <div className={style['title']}>
          Thêm mới{' '}
          <button
            onClick={() => {
              hide();
              setError('');
            }}
          >
            ✕
          </button>
        </div>
        <div className={style['main']}>
          <div className={style['inputGroup']}>
            <label htmlFor="firstName">Họ và tên đệm:</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Nguyễn Văn"
              value={newUser.firstName}
              onChange={handleNewUser}
            />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="lastName">Tên:</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="A"
              value={newUser.lastName}
              onChange={handleNewUser}
            />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="birthday">Ngày sinh:</label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              placeholder="0123456789"
              value={newUser.birthday}
              onChange={handleNewUser}
            />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="example@scigroup.com.vn"
              value={newUser.email}
              onChange={handleNewUser}
            />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="0123456789"
              value={newUser.phone}
              onChange={handleNewUser}
            />
          </div>
        </div>
        <div className={style['error']}>{errorServer ? <p>{errorServer}</p> : error && <p>{error}</p>}</div>
        <div className={style['control']}>
          <button className={style['edit']} onClick={saveUser}>
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
