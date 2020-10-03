import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './CardList';
import { shallow } from 'enzyme';
import Card from './Card';


it('snapshot CardList component', () => {
  const mockRobots = [{
    id: 1,
    username: 'john',
    email: 'john@gmail.com',
  }];

  const wrapper = renderer.create(<CardList robots={mockRobots}/>).toJSON();

  expect(wrapper).toMatchSnapshot();
});

it('should have two child component', () => {
  const mockRobots = [{
    id: 1,
    username: 'john',
    email: 'john@gmail.com',
  },
  {
    id: 2,
    username: 'adam',
    email: 'adam@gmail.com',
  }
];

  const wrapper = shallow(<CardList robots={mockRobots}/>);
  expect(wrapper.find(Card).length).toEqual(2);
})
