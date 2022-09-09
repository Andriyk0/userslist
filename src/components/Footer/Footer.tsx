import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStart } from '../../store';
import { getStart } from '../../store/selectors';
import './Footer.scss';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const start = useSelector(getStart);

  const prevPage = () => {
    dispatch(setStart(start - 4));
  };

  const nextPage = () => {
    dispatch(setStart(start + 4));
  };

  return (
    <footer className="footer">
      <button
        disabled={start === 0}
        type="button"
        className="footer__button"
        onClick={prevPage}
      >
        <img className="footer__img_left" src="./images/left.svg" alt="" />
        Previous
      </button>
      <button
        disabled={start === 8}
        type="button"
        className="footer__button"
        onClick={nextPage}
      >
        Next
        <img className="footer__img_right" src="./images/right.svg" alt="" />
      </button>
    </footer>
  );
};
