import React, { useRef } from 'react';
import style from './createUser.module.scss';
import { useOutside } from '@/utils/help';

const CreateUser = ({ hide }) => {
  const modalRef = useRef(null);
  useOutside(modalRef, hide);
  return (
    <div className={style['createUser']}>
      <div className={style['box']} ref={modalRef}>
        <div className={style['title']}>
          Thêm mới <button onClick={hide}>✕</button>
        </div>
        <div className={style['main']}>
          <div className={style['inputGroup']}>
            <label htmlFor="firstName">Họ và tên đệm:</label>
            <input id="firstName" type="text" placeholder="Nguyễn Văn" />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="lastName">Tên:</label>
            <input id="lastName" type="text" placeholder="A" />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="phone">Số điện thoại:</label>
            <input id="phone" type="text" placeholder="0123456789" />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" placeholder="example@scigroup.com.vn" />
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="brand">Khối/Thương hiệu:</label>
            <select name="" id="brand">
              <option value="">Chọn Khối/Thương hiệu</option>
            </select>
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="brand">Phòng ban:</label>
            <select name="" id="brand">
              <option value="">Chọn Phòng ban</option>
            </select>
          </div>
          <div className={style['inputGroup']}>
            <label htmlFor="brand">Chức vụ:</label>
            <select name="" id="brand">
              <option value="">Chọn Chức vụ</option>
            </select>
          </div>
        </div>
        <div className={style['control']}>
          <button className={style['edit']} onClick={() => {}}>
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
