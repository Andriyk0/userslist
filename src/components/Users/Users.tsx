import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../api/api';
import { setSelectUser, setUsers } from '../../store';
import {
  getSearchValue, getSelectedUser, getSortValue, getStart, getUsersFromStore,
} from '../../store/selectors';
import './Users.scss';
import { Loader } from '../Loader';

export const Users:React.FC = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(getSortValue);
  const searchValue = useSelector(getSearchValue);
  const users = useSelector(getUsersFromStore(sortValue, searchValue));
  const selectUser = useSelector(getSelectedUser);
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
    <div className={classnames('user', { user1: selectUser })}>
      {
        [...users].splice(start, 4).map((user:User) => (
          <div key={user.id} className={classnames('user__card', { user__card1: selectUser })}>
            <p className={classnames('user__info', { user__info1: selectUser })}>{user.name}</p>
            <p className={classnames('user__info', { user__info1: selectUser })}>{user.email}</p>
            <p className={classnames('user__info', { user__info1: selectUser })}>{user.phone}</p>
            <p className={classnames('user__info', { user__info1: selectUser })}>{user.website}</p>
            <button
              type="button"
              className={classnames('user__button', { user__button1: selectUser })}
              onClick={() => dispatch(setSelectUser(user))}
            >
              Show user posts
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
