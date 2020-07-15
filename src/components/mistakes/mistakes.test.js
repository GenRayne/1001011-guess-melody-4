import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

describe(`render Mistakes`, () => {
  it(`renders Mistakes with 0 count`, () => {
    const tree = renderer
      .create(
          <Mistakes count={0} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders Mistakes with 3 count`, () => {
    const tree = renderer
      .create(
          <Mistakes count={3} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
