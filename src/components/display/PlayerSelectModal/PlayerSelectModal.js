import React,
{
  Component,
  Fragment,
}                  from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import {
  Segment,
  Button,
  Dimmer,
  Flag,
  Icon,
  List,
  Loader,
  Modal,
}                  from 'semantic-ui-react';

import appThunks   from '../../../actions/appThunks';


const propTypes = {
  loadPlayers : PropTypes.func.isRequired,
  players     : PropTypes.array,
};
const defaultProps = { players: [] };

class PlayerSelectModal extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedPlayer: null };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.loadPlayers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleSelect(e,data) {
    this.setState({ selectedPlayer: data.id });
  }

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
              <Segment
                basic
                style={{ minHeight: '300px' }}
              >
                <Dimmer
                  active
                  inverted
                >
                  <Loader inverted>{'Loading'}</Loader>
                </Dimmer>
              </Segment>
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

PlayerSelectModal.propTypes = propTypes;

PlayerSelectModal.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => ({
  loadPlayers: () => {
    dispatch(appThunks.loadPlayers());
  },
});

const mapStateToProps = (state) => ({ players: state.players });

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectModal);

