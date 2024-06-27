import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUsers } from 'store/user/middleware';
import { selectLoading, selectTotal, selectUsers } from 'store/user/selector';
import { userColumnHeaders } from 'utils/columns';
import { GetDataArgs } from 'types/types';
import Table from 'components/table/Table';

const UserTable = () => {
  const usersLoading = useAppSelector(selectLoading);
  const usersTotal = useAppSelector(selectTotal);
  const userData = useAppSelector(selectUsers);

  const dispatch = useAppDispatch();

  const getUserData = ({ sorter, page, pageSize }: GetDataArgs) => {
    dispatch(getUsers({ sorter, page, pageSize }));
  };

  return (
    <Table
      loading={usersLoading}
      total={usersTotal}
      data={userData}
      initColumns={userColumnHeaders}
      getData={getUserData}
    />
  );
};

export default UserTable;
