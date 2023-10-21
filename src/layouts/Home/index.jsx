import React, { useState } from 'react';
import style from './home.module.scss';
import Header from '@/components/Header';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'react-tooltip';
import NoticeModal from '@/components/NoticeModal';
import StaffDetail from '@/components/StaffDetail';
import CreateUser from '@/components/CreateUser';
import { customStyles, paginationComponentOptions, userList } from '@/utils/util';
import Search from '@/components/Search';

const Home = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [itemId, setItemId] = useState(0);
  const handleDelete = () => {
    setIsDelete(false);
    console.log(itemId);
  };
  const columns = [
    {
      name: 'STT',
      selector: (row, index) => index + 1,
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
        <div className={style['action']}>
          <Search />
          <button onClick={() => setIsCreate(true)}>
            Thêm mới <i className="icon-plus-1"></i>
          </button>
        </div>
        <div className={style['dataTable']}>
          <DataTable
            columns={columns}
            data={userList}
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
      {isDetail && <StaffDetail close={() => setIsDetail(false)} />}
      {isCreate && <CreateUser hide={() => setIsCreate(false)} />}
    </div>
  );
};

export default Home;
