import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../api/api';
import { setSelectUserID, setUsers } from '../../store';
import {
  getSearchValue, getSelectedUserID, getSortValue, getStart, getUsersFromStore,
} from '../../store/selectors';
import './Users.scss';
import { Loader } from '../Loader';

export const Users:React.FC = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(getSortValue);
  const searchValue = useSelector(getSearchValue);
  const users = useSelector(getUsersFromStore(sortValue, searchValue));
  const selectUserID = useSelector(getSelectedUserID);
  const start = useSelector(getStart);

  const loadUsersFromServer = async () => {
    try {
      const response = await getUsers();

      dispatch(setUsers(response));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Error try again');
    }
  };

  useEffect(() => {
    loadUsersFromServer();
  }, [searchValue, sortValue]);

  return (
    <div className={classnames('user', { user1: selectUserID })}>
      {
        [...users].splice(start, 4).map((user:User) => (
          <div key={user.id} className={classnames('user__card', { user__card1: selectUserID })}>
            <p className={classnames('user__info', { user__info1: selectUserID })}>{user.name}</p>
            <p className={classnames('user__info', { user__info1: selectUserID })}>{user.email}</p>
            <p className={classnames('user__info', { user__info1: selectUserID })}>{user.phone}</p>
            <p className={classnames('user__info', { user__info1: selectUserID })}>{user.website}</p>
            <button
              type="button"
              className={classnames('user__button', { user__button1: selectUserID })}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                selectUserID === user.id
                  ? dispatch(setSelectUserID(0))
                  : dispatch(setSelectUserID(user.id));
              }}
            >
              {selectUserID === user.id ? 'Close user posts' : 'Show user posts'}
            </button>
          </div>
        ))
      }
      {
        users.length === 0 && (
          <Loader />
        )
      }
    </div>
  );
};
