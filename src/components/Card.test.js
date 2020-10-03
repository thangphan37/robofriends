import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';


it('snapshot Card component', () => {
  const mockRobot = {
    id: 1,
    username: 'john',
    email: 'john@gmail.com'
  };

  const wrapper = renderer.create(<Card robot={mockRobot}/>).toJSON();

  expect(wrapper).toMatchSnapshot();
})
