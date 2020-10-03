import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import MainPage from './MainPage';
import SearchBox from './SearchBox';
import CardList from './CardList';

describe('test MainPage component', () => {
  let props;
  let useEffect;

  props = {
    robots: [{
      id: 1,
      username: 'john',
      email: 'john@gmail.com'
    }],
    isPending: false,
    searchField: '',
    requestRobots: jest.fn()
  };

  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');


    mockUseEffect();
  });

  it('snapshot MainPage component', () => {
    const wrapper = renderer.create(<MainPage {...props}/>).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('request Robots', () => {
    expect(props.requestRobots).toHaveBeenCalled();
  });

  it('search Robots', () => {
    const wrapper = shallow(<MainPage {...props}/>);

    expect(wrapper.find(CardList).prop('robots')).toEqual(props.robots);
  })
})

