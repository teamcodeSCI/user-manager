import React, { useRef } from 'react';
import style from './staffDetail.module.scss';
import StaffInfo from '../StaffInfo';
import { useOutside } from '@/utils/help';

const StaffDetail = ({ close }) => {
  const staffRef = useRef(null);
  useOutside(staffRef, close);
  return (
    <div className={style['staffDetail']}>
      <div className={style['box']} ref={staffRef}>
        <div className={style['title']}>
          Chi tiết <button onClick={close}>✕</button>
        </div>
        <ul className={style['tab']}>
          <li style={{ borderColor: '#232323' }}>Thông tin</li>
          <li>Tài khoản</li>
          <li>Mật khẩu</li>
        </ul>
        <StaffInfo />
      </div>
    </div>
  );
};

export default StaffDetail;
