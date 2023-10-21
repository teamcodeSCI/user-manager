import React from 'react';
import style from './toggleSwitch.module.scss';

const ToggleSwitch = ({ status, onChange }) => {
  return (
    <label className={style['switch']}>
      <input type="checkbox" checked={status} value={status} onChange={onChange} />
      <span className={style['slider']}></span>
    </label>
  );
};

export default ToggleSwitch;
