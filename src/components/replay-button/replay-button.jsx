import React from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

export const ReplayButton = () => {
  const dispatch = useDispatch();

  const onReplayClick = () => {
    dispatch(ActionCreator.returnToStart());
  };

  return (
    <button className="replay" type="button" onClick={onReplayClick}>Попробовать ещё раз</button>
  );
};
