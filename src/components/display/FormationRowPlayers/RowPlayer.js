import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dimmer,
  Image,
  Flag,
  Card,
  Label,
} from 'semantic-ui-react';

import defaultImg from '../../../image.png';
import Position from '../../../globals/constants/Position';


const propTypes = {
  country   : PropTypes.string.isRequired,
  firstName : PropTypes.string.isRequired,
  id        : PropTypes.number.isRequired,
  lastName  : PropTypes.string.isRequired,
  position  : PropTypes.oneOf(Position).isRequired,
  img       : PropTypes.string,
};

const defaultProps = { img: null };

class RowPlayer extends Component {

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
    const {
      country,
      firstName,
      id,
      lastName,
      position,
      img,
    } = this.props;

    const { dimmerActive } = this.state;

    return (
      <Card
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Dimmer.Dimmable
          blurring
          dimmed={dimmerActive}
          tabIndex={0}
        >
          <Dimmer active={dimmerActive}>
            <Button
              content='Remove'
              inverted
              size='small'
            />
          </Dimmer>
          <Image
            alt=''
            src={img ? img : defaultImg}
          />
        </Dimmer.Dimmable>
        <Card.Content>
          <Card.Header>
            <Flag
              className={country}
              style={{
                float     : 'right',
                marginTop : '.375em',
              }}
            />
            {firstName + ' ' + lastName}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>
            <Label
              circular
              content={id}
              style={{ float: 'right' }}
            />
            <Label
              basic
              content={position}
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }

}

RowPlayer.propTypes = propTypes;

RowPlayer.defaultProps = defaultProps;

export default RowPlayer;
