import React, { useState } from 'react';
import style from './password.module.scss';

const Password = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={style['password']}>
      <div className={style['main']}>
        <div className={style['inputGroup']}>
          <label htmlFor="password">Mật khẩu mới:</label>
          <input id="password" type="password" placeholder="Nhập mật khẩu mới" disabled={!isEdit} />
        </div>
        <div className={style['inputGroup']}>
          <label htmlFor="retype">Nhập lại mật khẩu:</label>
          <input id="retype" type="password" placeholder="Nhập lại mật khẩu" disabled={!isEdit} />
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
            Đổi mật khẩu
          </button>
        )}
      </div>
    </div>
  );
};

export default Password;
