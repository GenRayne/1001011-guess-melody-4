import React from 'react';
import {number} from 'prop-types';

const Mistakes = ({count}) => {
  const mistakes = new Array(count).fill(``).map((_item, i) => ({key: i}));

  return (
    <div className="game__mistakes">
      {mistakes.map(({key}) => <div key={`mistake-${key}`} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = {
  count: number,
};

export default Mistakes;
