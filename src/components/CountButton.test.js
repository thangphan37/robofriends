import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import CounterButton from './CountButton';

it('snapshot CountButton component', () => {
  const wrapper = renderer.create(<CounterButton />).toJSON();

  expect(wrapper).toMatchSnapshot();
});

it('should click count button', () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find('button').prop('onClick')();
  wrapper.find('button').prop('onClick')();

  expect(wrapper.find('button').text()).toEqual("2");
})