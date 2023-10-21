import React from 'react';
import style from './search.module.scss';
import { pressEnter } from '@/utils/help';

const Search = ({ onChange, value, clickSearch }) => {
  return (
    <div className={style['search']}>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên ..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => pressEnter(e, clickSearch)}
      />
      <i className="icon-search-2" onClick={clickSearch}></i>
    </div>
  );
};

export default Search;
