import React, { useState } from 'react';
import style from './staffInfo.module.scss';

const StaffInfo = ({ staffInfo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [staff, setStaff] = useState(staffInfo);
  const handleStaffInfo = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };
  return (
    <div className={style['staff']}>
      <div className={style['staffInfo']}>
        <div className={style['inputGroup']}>
          <label htmlFor="firstName">Họ và tên đệm:</label>
          <input
            id="firstName"
            type="text"
            placeholder="Nguyễn Văn"
            name="first_name"
            value={staff.first_name}
            disabled={!isEdit}
            onChange={handleStaffInfo}
          />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="lastName">Tên:</label>
          <input
            id="lastName"
            type="text"
            placeholder="A"
            name="last_name"
            value={staff.last_name}
            disabled={!isEdit}
            onChange={handleStaffInfo}
          />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="birthday">Ngày sinh:</label>
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={staff.birthday}
            disabled={!isEdit}
            onChange={handleStaffInfo}
          />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            id="phone"
            type="text"
            placeholder="0123456789"
            name="phone"
            value={staff.phone}
            disabled={!isEdit}
            onChange={handleStaffInfo}
          />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            placeholder="example@scigroup.com.vn"
            name="email"
            value={staff.email}
            disabled={!isEdit}
            onChange={handleStaffInfo}
          />
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
