import React, { Component } from 'react';
import { Route }                from 'react-router-dom';
import {
  Grid,
  Header,
  Transition,
}                               from 'semantic-ui-react';

import PlayerList               from '../../display/PlayerList';
import PlayerDetail             from '../../display/PlayerDetail';

class Players extends Component {

  render() {
    return (
      <Transition
        animation='fade'
        duration={300}
        transitionOnMount
      >
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
              path='/players/:playerID?'
            />
            <Route
              component={PlayerDetail}
              path='/players/:playerID'
            />
          </Grid.Row>
        </Grid>
      </Transition>
    );
  }

}

export default Players;
