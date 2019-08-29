import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import {
  Card,
  Grid,
  Transition,
}                               from 'semantic-ui-react';
import _                        from 'lodash';

import RowPlayer                from './RowPlayer';
import RowButton                from './RowButton';
import Position                 from '../../../globals/constants/Position';


class FormationRowPlayers extends PureComponent {

  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.number
    ).isRequired,
    position   : PropTypes.oneOf(Position).isRequired,
    maxPlayers : PropTypes.number,
  };

  static defaultProps = { maxPlayers: 1 };

  render() {
    const {
      maxPlayers,
      players,
      position,
    } = this.props;

    return (
      <Grid.Row>
        <Grid.Column>
          {players &&
            <Transition.Group
              animation='scale'
              as={Card.Group}
              className='centered'
              duration={200}
              itemsPerRow={5}
            >
              {_.times(maxPlayers, (i) =>
                players[i] ?
                  <RowPlayer
                    country={'gb wls'}
                    firstName={'Aaron'}
                    id={players[i]}
                    key={i}
                    lastName={'Ramsey'}
                    position={'FWD'}
                  />
                  :
                  <RowButton
                    key={i}
                    position={position}
                  />
              )}
            </Transition.Group>
          }

        </Grid.Column>
      </Grid.Row>
    );
  }

}

export default FormationRowPlayers;
