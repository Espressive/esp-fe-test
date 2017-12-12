import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class TeamList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div data-component='TeamList'>
        <Header content='TeamList' />
      </div>
    );
  }

}

export default TeamList;
