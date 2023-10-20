import React, { useState } from 'react';
import style from './home.module.scss';
import Header from '@/components/Header';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'react-tooltip';
import NoticeModal from '@/components/NoticeModal';

const customStyles = {
  headRow: {
    style: {
      borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
  rows: {
    style: {
      minHeight: '50px',
      fontSize: '14px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
};

const paginationComponentOptions = {
  selectAllRowsItem: true,
  selectAllRowsItemText: 'All',
};
const data = [
  {
    id: 1,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 2,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 3,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 4,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 5,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 6,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
  {
    id: 7,
    name: 'Đoàn Minh Đức',
    phone: '0123456789',
    email: 'duc@scigroup.com.vn',
    brand: 'Sale & Marketing',
    department: 'Phát triển web',
    position: 'Nhân viên',
  },
];
const Home = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [itemId, setItemId] = useState(0);
  const handleDelete = () => {
    setIsDelete(false);
    console.log(itemId);
  };
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      grow: 0.5,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Điện thoại',
      selector: (row) => row.phone,
      grow: 0.5,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Khối/ Thương hiệu',
      selector: (row) => row.brand,
    },
    {
      name: 'Phòng ban',
      selector: (row) => row.department,
    },
    {
      name: 'Chức vụ',
      selector: (row) => row.position,
      grow: 0.5,
    },

    {
      name: '',
      right: true,
      cell: (row) => (
        <div className={style['control']} style={{ display: 'flex' }}>
          <button
            data-tooltip-id="delete"
            data-tooltip-content="Xóa"
            data-tooltip-delay-show={1000}
            className={style['delete']}
            onClick={() => {
              setIsDelete(true);
              setItemId(row.id);
            }}
          >
            <i className="icon-trash"></i>
          </button>

          <Tooltip id="delete" />
          <button
            data-tooltip-id="detail"
            data-tooltip-content="Chi tiết"
            data-tooltip-delay-show={1000}
            className={style['detail']}
            onClick={() => {
              setIsDetail(true);
              setItemId(row.id);
            }}
          >
            <i className="icon-circle"></i>
            <i className="icon-circle"></i>
            <i className="icon-circle"></i>
          </button>
          <Tooltip id="detail" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <div className={style['main']}>
        <div className={style['title']}>Danh sách user</div>
        <div className={style['dataTable']}>
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            paginationRowsPerPageOptions={[10, 20, 50]}
            customStyles={customStyles}
          />
        </div>
      </div>
      {isDelete && (
        <NoticeModal hide={() => setIsDelete(false)} message={'Bạn có chắc muốn xóa không ?'} action={handleDelete} />
      )}
    </div>
  );
};

export default Home;
