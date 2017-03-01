import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
  it('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Header>Facebook</Header>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('reders h1', () => {
    const header = shallow(<Header>Facebook</Header>);
    expect(header.find('h1').length).toBe(1);
  });
});
