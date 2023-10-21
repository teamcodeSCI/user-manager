import React, { useEffect, useState } from 'react';
import style from './home.module.scss';
import Header from '@/components/Header';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'react-tooltip';
import NoticeModal from '@/components/NoticeModal';
import StaffDetail from '@/components/StaffDetail';
import CreateUser from '@/components/CreateUser';
import { customStyles, paginationComponentOptions } from '@/utils/util';
import Search from '@/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/features/auth/authApi';
import { currentUserSelector, loadingAuthSelector } from '@/features/auth/authSlice';
import Loading from '@/components/Loading';
import { Navigate } from 'react-router-dom';
import { fetchUser } from '@/features/userList/userApi';
import userListSlice, {
  loadedUserListSelector,
  loadingUserListSelector,
  userListSelector,
} from '@/features/userList/userSlice';
import { formatDate } from '@/utils/help';

const Home = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(loadingAuthSelector);
  const currentUser = useSelector(currentUserSelector);
  if (currentUser === undefined) {
    localStorage.clear();
  }
  const userListLoaded = useSelector(loadedUserListSelector);
  const userListLoading = useSelector(loadingUserListSelector);
  const userList = useSelector(userListSelector);
  const [search, setSearch] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [itemId, setItemId] = useState(0);
  const handleDelete = () => {
    setIsDelete(false);
    console.log(itemId);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      dispatch(fetchUser());
      return;
    }
  };
  const clickSearch = () => {
    if (search !== '') dispatch(userListSlice.actions.searchUser(search));
  };
  const columns = [
    {
      name: 'STT',
      selector: (row, index) => index + 1,
      grow: 0.5,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.first_name + ' ' + row.last_name,
      sortable: true,
    },
    {
      name: 'Điện thoại',
      selector: (row) => row.phone,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Ngày sinh',
      selector: (row) => formatDate(row.birthday),
      grow: 0.5,
    },
    {
      name: '',
      right: true,
      grow: 0.5,
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
  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div>
      {(userLoading || userListLoading) && <Loading />}
      <Header />
      <div className={style['main']}>
        <div className={style['title']}>Danh sách user</div>
        <div className={style['action']}>
          <Search onChange={handleSearch} value={search} clickSearch={clickSearch} />
          <button onClick={() => setIsCreate(true)}>
            Thêm mới <i className="icon-plus-1"></i>
          </button>
        </div>
        <div className={style['dataTable']}>
          {userListLoaded && (
            <DataTable
              columns={columns}
              data={userList}
              pagination
              paginationComponentOptions={paginationComponentOptions}
              paginationRowsPerPageOptions={[10, 20, 50]}
              customStyles={customStyles}
            />
          )}
        </div>
      </div>
      {isDelete && (
        <NoticeModal hide={() => setIsDelete(false)} message={'Bạn có chắc muốn xóa không ?'} action={handleDelete} />
      )}
      {isDetail && <StaffDetail close={() => setIsDetail(false)} />}
      {isCreate && <CreateUser hide={() => setIsCreate(false)} isCreate={isCreate} />}
      {currentUser === undefined && <Navigate to={'/auth'} />}
    </div>
  );
};

export default Home;
