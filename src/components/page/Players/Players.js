import React, { Component } from 'react';
import { Route }            from 'react-router-dom';
import {
  Grid,
  Header,
}                           from 'semantic-ui-react';

import PlayerList           from '../../display/PlayerList';
import PlayerDetail         from '../../display/PlayerDetail';

class Players extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <Grid
        data-component='Players'
        padded
      >
        <Grid.Row>
          <Grid.Column>
            <Header content='Players' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Route
            component={PlayerList}
            path='/players'
          />
          <Route
            component={PlayerDetail}
            path='/players/:playerID'
          />
        </Grid.Row>
      </Grid>
    );
  }

}

export default Players;
