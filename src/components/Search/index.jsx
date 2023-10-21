import React from 'react';
import style from './search.module.scss';

const Search = () => {
  return (
    <div className={style['search']}>
      <input type="text" placeholder="Tìm kiếm theo tên ..." />
      <i className="icon-search-2"></i>
    </div>
  );
};

export default Search;
