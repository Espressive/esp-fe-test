import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Flag, Grid, List,} from 'semantic-ui-react';
import appThunks from '../../../actions/appThunks';
import ListLoading from "../ListLoading";

class PlayerList extends Component {

  static propTypes = {
    loadPlayers : PropTypes.func.isRequired,
    match       : PropTypes.shape({ params: PropTypes.shape({ playerID: PropTypes.string }) }),
    players     : PropTypes.array,
  };

  static defaultProps = {
    match   : null,
    players : [],
  };

  componentDidMount() {
    this.props.loadPlayers();
  }

  render() {
    const { playerID } = this.props.match.params;

    const { players } = this.props;

    return (
      <Grid.Column width={5}>
        <List
          relaxed='very'
          selection
          size='large'
          style={{
            maxHeight : 'calc(100vh - 160px)',
            overflowY : 'auto',
          }}
        >
          {players ?
            players.map((player) => (
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
            ))
            :
            // TODO: This markup used to show the user a loading state while
            // they wait for Redux state to populate. It can be moved to a new
            // component for reusability.
            <ListLoading/>
          }
        </List>
      </Grid.Column>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  loadPlayers: () => {
    dispatch(appThunks.loadPlayers());
  },
});

const mapStateToProps = (state) => ({ players: state.players });

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);

