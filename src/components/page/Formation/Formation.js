import React, { Component } from 'react';
import {
  Grid,
  Header,
}                           from 'semantic-ui-react';
import FormationRowPlayers  from '../../display/FormationRowPlayers';

class Formation extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const forwards = [null,9];
    const midfielders = [11,null,null,19];
    const defenders = [18,6,null,24];
    const keeper = [33];

    return (
      <Grid
        data-component='Formation'
        padded
      >
        <Grid.Row>
          <Grid.Column>
            <Header content='Formation' />
          </Grid.Column>
        </Grid.Row>
        <FormationRowPlayers
          players={forwards}
        />
        <FormationRowPlayers
          players={midfielders}
        />
        <FormationRowPlayers
          players={defenders}
        />
        <FormationRowPlayers
          players={keeper}
        />
      </Grid>
    );
  }

}

export default Formation;
