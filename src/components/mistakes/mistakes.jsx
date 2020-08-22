import React from 'react';
import {number} from 'prop-types';

const Mistakes = ({count}) => {
  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((_item, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = {
  count: number,
};

export default Mistakes;
