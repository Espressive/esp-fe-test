import React, { PureComponent } from 'react';
import { NavLink }              from 'react-router-dom';
import {
  Menu,
  Header,
}                               from 'semantic-ui-react';
import logo                     from '../../../field.svg';

class MainMenu extends PureComponent {

  render() {
    return (
      <Menu
        borderless
        fixed='top'
        inverted
        stackable
      >
        <Menu.Item>
          <Header
            as='h4'
            content='Team Builder'
            image={
              <img
                alt='Acme'
                src={logo}
              />
            }
            inverted
          />
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          content='Formation'
          exact
          to='/'
        />
        <Menu.Item
          as={NavLink}
          content='Players'
          to='/players'
        />
      </Menu>
    );
  }

}

export default MainMenu;
