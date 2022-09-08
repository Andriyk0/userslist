import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../api/api';
import { setSelectUser, setUsers } from '../../store';
import { getUsersFromStore } from '../../store/selectors';
import './Users.scss';

export const Users:React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersFromStore);
  const [showUsers, setShowUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsersFromServer = async () => {
      try {
        const response = await getUsers();

        dispatch(setUsers(response));
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error try again');
      }
    };

    loadUsersFromServer();
  }, []);

  useEffect(() => {
    setShowUsers([...users].splice(0, 4));
  }, [users]);

  return (
    <div className="user">
      {
        showUsers.map((user:User) => (
          <div key={user.id} className="user__card">
            <p className="user__info">{user.name}</p>
            <p className="user__info">{user.email}</p>
            <p className="user__info">{user.phone}</p>
            <p className="user__info">{user.website}</p>
            <button
              type="button"
              className="user__button"
              onClick={() => dispatch(setSelectUser(user))}
            >
              Show user posts
            </button>
          </div>
        ))
      }
    </div>
  );
};
