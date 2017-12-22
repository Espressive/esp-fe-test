import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router-dom';
import {
  Flag,
  Grid,
  List,
}                           from 'semantic-ui-react';

const propTypes = { match: PropTypes.shape({ params: PropTypes.shape({ playerID: PropTypes.string }) }) };

const defaultProps = { match: null };

class PlayerList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    // TODO: This temporary data needs to be removed and replaced with real
    // player data from /api/v1/players
    const players = [
      {
        id         : 17,
        first_name : 'First',
        last_name  : 'Last',
        country    : 'gb eng',
        position   : 'MID',
        img        : '/img/team/17.png',
      },
      {
        id         : 10,
        first_name : 'First',
        last_name  : 'Last',
        country    : 'gb eng',
        position   : 'MID',
        img        : '/img/team/10.png',
      },
      {
        id         : 11,
        first_name : 'First',
        last_name  : 'Last',
        country    : 'gb eng',
        position   : 'MID',
        img        : '/img/team/11.png',
      },
    ];

    const { playerID } = this.props.match.params;

    return (
      <Grid.Column width={6}>
        <List
          relaxed='very'
          selection
          size='large'
        >
          {players.map((player) => (
            <List.Item
              active={player.id === Number(playerID)}
              as={Link}
              content={player.position}
              description={<Flag className={player.country} />}
              header={[player.first_name,player.last_name].join(' ')}
              image={{
                avatar : true,
                src    : player.img,
              }}
              key={player.id}
              to={'/players/' + player.id}
            />
          ))}
        </List>
      </Grid.Column>
    );
  }

}

PlayerList.propTypes = propTypes;

PlayerList.defaultProps = defaultProps;

export default PlayerList;
