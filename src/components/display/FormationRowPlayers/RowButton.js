import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
  Button,
  Card,
  Dimmer,
  Modal,
}                           from 'semantic-ui-react';

import PlayerSelectModal    from '../PlayerSelectModal';

const propTypes = { className: PropTypes.string };

const defaultProps = { className: null };

class RowButton extends Component {

  constructor(props) {
    super(props);
    this.state = { dimmerActive: false };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleMouseEnter() {
    this.setState({ dimmerActive: true });
  }

  handleMouseLeave() {
    this.setState({ dimmerActive: false });
  }

  render() {
    const { className } = this.props;

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
          borderColor     : '#ccc',
          borderStyle     : 'dashed',
          borderWidth     : '1px',
          minHeight       : '266px',
          backgroundColor : '#fdfdfd',
          boxShadow       : 'inset 0 .125em .25em #f0f0f0',
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
            <PlayerSelectModal />
          </Modal>

        </Dimmer>
      </Dimmer.Dimmable>
    );
  }

}

RowButton.propTypes = propTypes;

RowButton.defaultProps = defaultProps;

export default RowButton;
