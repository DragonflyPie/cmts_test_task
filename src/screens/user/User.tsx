import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUsers } from 'store/user/middleware';
import { selectLoading, selectTotal, selectUsers } from 'store/user/selector';
import { userColumnHeaders } from 'utils/columns';
import { GetDataArgs } from 'types/types';
import Table from 'components/table/Table';
import { useCallback } from 'react';

const User = () => {
  const usersLoading = useAppSelector(selectLoading);
  const usersTotal = useAppSelector(selectTotal);
  const userData = useAppSelector(selectUsers);

  const dispatch = useAppDispatch();

  const getUserData = useCallback(
    ({ sorter, page, pageSize }: GetDataArgs) => {
      dispatch(getUsers({ sorter, page, pageSize }));
    },
    [dispatch],
  );

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

export default User;
