import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Flag,
  Modal,
  List,
  Icon,
} from 'semantic-ui-react';

const propTypes = {};

const defaultProps = {};

class PlayerSelectModal extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedPlayer: null };

    this.handleSelect = this.handleSelect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleSelect(e,data) {
    this.setState({ selectedPlayer: data.id });
  }

  render() {
    const players = [
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 10,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 11,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 12,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 13,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 14,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 15,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
      {
        country   : 'gb eng',
        firstName : 'Jack',
        id        : 16,
        img       : 'img/team/10.png',
        lastName  : 'Wilshere',
        position  : 'MID',
      },
    ];

    const { selectedPlayer } = this.state;

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
            {players.map((player) => (
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
                header={player.firstName + ' ' + player.lastName}
                id={player.id}
                image={{
                  avatar : true,
                  src    : player.img,
                }}
                key={player.id}
                onClick={this.handleSelect}
                style={{ position: 'relative' }}
              />
            ))}
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

export default PlayerSelectModal;
