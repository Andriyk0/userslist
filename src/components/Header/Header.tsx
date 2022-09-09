import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSortValue } from '../../store';
import { getSearchValue, getSortValue } from '../../store/selectors';
import './Header.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(getSortValue);
  const searchValue = useSelector(getSearchValue);

  return (
    <header className="header">
      <select
        className="header__select"
        value={sortValue}
        onChange={(event) => dispatch(setSortValue(event.target.value))}
      >
        <option value="All">All</option>
        <option value="name">Name</option>
      </select>
      <input
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        className="header__input"
        type="text"
        placeholder="Search"
      />
    </header>
  );
};
