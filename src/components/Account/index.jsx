import React from 'react';
import style from './account.module.scss';
import DataTable from 'react-data-table-component';
import { customStyles } from '@/utils/util';
import ToggleSwitch from '../ToggleSwitch';

const accountList = [
  { id: 1, name: 'Facebook', url: 'https://www.facebook.com/', status: true },
  { id: 2, name: 'Google', url: 'https://www.google.com/', status: false },
];
const Account = () => {
  const columns = [
    {
      name: 'STT',
      selector: (row, index) => index + 1,
      grow: 0.5,
    },
    {
      name: 'Tên trang',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Url',
      selector: (row) => row.url,
    },

    {
      name: 'Trạng thái',
      center: true,
      cell: (row) => <ToggleSwitch status={row.status} />,
    },
  ];
  return (
    <div className={style['dataTable']}>
      <DataTable columns={columns} data={accountList} customStyles={customStyles} />
    </div>
  );
};

export default Account;
