import React, { useState } from 'react';
import style from './staffInfo.module.scss';

const StaffInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={style['staff']}>
      <div className={style['staffInfo']}>
        <div className={style['inputGroup']}>
          <label htmlFor="firstName">Họ và tên đệm:</label>
          <input id="firstName" type="text" placeholder="Nguyễn Văn" disabled={!isEdit} />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="lastName">Tên:</label>
          <input id="lastName" type="text" placeholder="A" disabled={!isEdit} />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="birthday">Ngày sinh:</label>
          <input id="birthday" type="date" disabled={!isEdit} />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="phone">Số điện thoại:</label>
          <input id="phone" type="text" placeholder="0123456789" disabled={!isEdit} />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" placeholder="example@scigroup.com.vn" disabled={!isEdit} />
        </div>
      </div>
      <div className={style['control']}>
        {isEdit ? (
          <>
            <button className={style['cancel']} onClick={() => setIsEdit(false)}>
              Hủy bỏ
            </button>
            <button className={style['edit']} onClick={() => setIsEdit(false)}>
              Lưu thay đổi
            </button>
          </>
        ) : (
          <button className={style['edit']} onClick={() => setIsEdit(true)}>
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
};

export default StaffInfo;
