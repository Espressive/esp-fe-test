import PropTypes from 'prop-types';
import React, {Component, Fragment,} from 'react';
import {connect} from 'react-redux';
import {Button, Flag, Icon, List, Modal,} from 'semantic-ui-react';

import appThunks from '../../../actions/appThunks';
import ListLoading from "../ListLoading";

class PlayerSelectModal extends Component {

  static propTypes = {
    loadPlayers : PropTypes.func.isRequired,
    players     : PropTypes.array,
  };

  static defaultProps = { players: [] };

  state = { selectedPlayer: null };

  componentDidMount() {
    this.props.loadPlayers();
  }

  handleSelect = (e,data) => {
    this.setState({ selectedPlayer: data.id });
  };

  render() {
    const { selectedPlayer } = this.state;

    const { players } = this.props;

    return (
      <Fragment>
        <Modal.Header content='Select A Player' />
        <Modal.Content
          scrolling
          style={{ padding: 0 }}
        >
          <List
            divided
            relaxed
            selection
          >
            {players ?
              players.map((player) => (
                <List.Item
                  active={selectedPlayer === player.id}
                  as='a'
                  content={player.position}
                  description={
                    <Fragment>
                      <Flag className={player.country} />
                      {selectedPlayer === player.id &&
                      <Icon
                        className='check'
                        color='green'
                        floated='right'
                        size='large'
                        style={{
                          position  : 'absolute',
                          right     : '1em',
                          top       : '50%',
                          transform : 'translateY(-50%)',
                        }}
                      />
                      }
                    </Fragment>
                  }
                  header={[player.first_name,player.last_name].join(' ')}
                  id={player.id}
                  image={{
                    avatar : true,
                    src    : player.img,
                  }}
                  key={player.id}
                  onClick={this.handleSelect}
                  style={{ position: 'relative' }}
                />
              ))
              :
              // TODO: This markup used to show the user a loading state while
              // they wait for Redux state to populate. It can be moved to a new
              // component for reusability.
              <ListLoading/>
            }
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='Select'
            positive
          />
        </Modal.Actions>
      </Fragment>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  loadPlayers: () => {
    dispatch(appThunks.loadPlayers());
  },
});

const mapStateToProps = (state) => ({ players: state.players });

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectModal);

