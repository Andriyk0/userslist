import React from 'react';
import { Users } from '../../components/Users';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  return (
    <div className="main">
      <Users />
    </div>
  );
};
