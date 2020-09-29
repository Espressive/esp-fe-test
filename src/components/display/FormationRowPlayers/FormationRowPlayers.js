import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Card, Grid, Transition,} from 'semantic-ui-react';
import Position from '../../../globals/constants/Position';

import RowButton from './RowButton';
import RowPlayer from './RowPlayer';


class FormationRowPlayers extends Component {

  static propTypes = {
    maxPlayers : PropTypes.number,
    players: PropTypes.arrayOf(
      PropTypes.number
    ).isRequired,
    position   : PropTypes.oneOf(Position).isRequired,
    teamList: PropTypes.arrayOf(
        PropTypes.object
    ),
  };

  static defaultProps = { maxPlayers: 1 };

  render() {
    const {
      maxPlayers,
      players,
      position,
      teamList
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
                  {
                    const id = players[i]
                    const player = teamList && teamList.filter(element => element.id === id)[0];
                    return (player && players[i] ?
                        <RowPlayer
                            country={player.country}
                            firstName={player.first_name}
                            id={players[i]}
                            key={i}
                            lastName={player.last_name}
                            position={player.position}
                        />
                        :
                        <RowButton
                            key={i}
                            position={position}
                        />)
                  }
              )}
            </Transition.Group>
          }

        </Grid.Column>
      </Grid.Row>
    );
  }

}

export default FormationRowPlayers;
