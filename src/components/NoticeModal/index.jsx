import React, { useRef } from 'react';
import style from './noticeModal.module.scss';
import { useOutside } from '@/utils/help';

const NoticeModal = ({ hide, message, action }) => {
  const delRef = useRef(null);
  useOutside(delRef, hide);
  return (
    <div className={style['noticeModal']}>
      <div className={style['box']} ref={delRef}>
        <div className={style['title']}>Thông báo</div>
        <div className={style['content']}>{message}</div>
        <div className={style['btn']}>
          <button onClick={action}>Đồng ý</button>
          <button onClick={hide}>Hủy bỏ</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
