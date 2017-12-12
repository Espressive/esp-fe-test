import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
  Card,
  Grid,
}                           from 'semantic-ui-react';
import uniqueId             from 'lodash.uniqueid';

import RowPlayer            from './RowPlayer';
import RowButton            from './RowButton';

const propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.number
  ),
};

const defaultProps = { players: null };

class FormationRowPlayers extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { players } = this.props;

    return (
      <Grid.Row>
        <Grid.Column>
          {players &&
            <Card.Group
              className='centered'
              itemsPerRow={6}
            >
              {players.map((player,i) =>
                player ?
                  <RowPlayer
                    country={'gb wls'}
                    firstName={'Aaron'}
                    id={player}
                    key={player}
                    lastName={'Ramsey'}
                    position={'FWD'}
                  />
                  :
                  <RowButton key={uniqueId()} />
              )}
            </Card.Group>
          }

        </Grid.Column>
      </Grid.Row>
    );
  }

}

FormationRowPlayers.propTypes = propTypes;

FormationRowPlayers.defaultProps = defaultProps;

export default FormationRowPlayers;
