import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

it('snapshot SearchBox component', () => {
  const wrapper = renderer.create(<SearchBox />).toJSON();

  expect(wrapper).toMatchSnapshot();
})