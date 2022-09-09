import React from 'react';
import { useSelector } from 'react-redux';
import { Posts } from '../../components/Posts';
import { Users } from '../../components/Users';
import { getSelectedUser } from '../../store/selectors';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  const user = useSelector(getSelectedUser);

  return (
    <div className="main">
      <Users />
      {user && (
        <Posts />
      )}
    </div>
  );
};
