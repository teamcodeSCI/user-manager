import React, { useRef, useState } from 'react';
import style from './staffDetail.module.scss';
import StaffInfo from '../StaffInfo';
import { useOutside } from '@/utils/help';
import Account from '../Account';
import Password from '../Password';

const StaffDetail = ({ close }) => {
  const staffRef = useRef(null);
  const [tabName, setTabName] = useState('Thông tin');
  const tab = [
    { name: 'Thông tin', component: <StaffInfo /> },
    { name: 'Tài khoản', component: <Account /> },
    { name: 'Bảo mật', component: <Password /> },
  ];
  const render = tab.filter((item) => item.name === tabName);
  useOutside(staffRef, close);
  return (
    <div className={style['staffDetail']}>
      <div className={style['box']} ref={staffRef}>
        <div className={style['title']}>
          Chi tiết <button onClick={close}>✕</button>
        </div>
        <ul className={style['tab']}>
          {tab.map((item) => (
            <li
              key={item.name}
              onClick={() => setTabName(item.name)}
              style={tabName === item.name ? { borderColor: '#232323' } : {}}
            >
              {item.name}
            </li>
          ))}
        </ul>
        {render[0].component}
      </div>
    </div>
  );
};

export default StaffDetail;
