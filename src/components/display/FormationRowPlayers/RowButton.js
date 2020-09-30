import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button, Card, Dimmer, Modal,} from 'semantic-ui-react';

import PlayerSelectModal from '../PlayerSelectModal';


class RowButton extends Component {

  static propTypes = { className: PropTypes.string };

  static defaultProps = { className: null };

  state = { dimmerActive: false };

  handleMouseEnter = () => {
    this.setState({ dimmerActive: true });
  }

  handleMouseLeave = () => {
    this.setState({ dimmerActive: false });
  }

  render() {
    const { className, position, place } = this.props;

    const { dimmerActive } = this.state;
    return (
      <Dimmer.Dimmable
        as={Card}
        blurring
        className={className}
        dimmed={dimmerActive}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          backgroundColor : '#fdfdfd',
          borderColor     : '#ccc',
          borderStyle     : 'dashed',
          borderWidth     : '1px',
          boxShadow       : 'inset 0 .125em .25em #f0f0f0',
          minHeight       : '266px',
        }}
        tabIndex={0}
      >
        <Dimmer active={dimmerActive}>
          <Modal
            dimmer='blurring'
            size='mini'
            trigger={
              <Button
                content='Add'
                inverted
                size='small'
              />
            }
          >
            <PlayerSelectModal positionRow={position} place={place}/>
          </Modal>

        </Dimmer>
      </Dimmer.Dimmable>
    );
  }

}

export default RowButton;
