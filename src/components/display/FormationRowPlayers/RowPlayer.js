import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router-dom';
import {
  Button,
  Card,
  Dimmer,
  Flag,
  Icon,
  Image,
  Label,
}                           from 'semantic-ui-react';

import defaultImg           from '../../../image.png';
import Position             from '../../../globals/constants/Position';

class RowPlayer extends Component {

  static propTypes = {
    country   : PropTypes.string.isRequired,
    firstName : PropTypes.string.isRequired,
    id        : PropTypes.number.isRequired,
    lastName  : PropTypes.string.isRequired,
    position  : PropTypes.oneOf(Position).isRequired,
    className : PropTypes.string,
    img       : PropTypes.string,
  };

  static defaultProps = {
    img       : null,
    className : null,
  };

  state = { dimmerActive: false };

  handleMouseEnter = () => {
    this.setState({ dimmerActive: true });
  }

  handleMouseLeave = () => {
    this.setState({ dimmerActive: false });
  }

  render() {
    const {
      className,
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
        className={className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Dimmer.Dimmable
          blurring
          dimmed={dimmerActive}
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
          <Card.Header
            as={Link}
            to={'/players/' + id}
          >
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
            <Label color='teal'>
              <Icon
                className='user'
                style={{ marginRight: '.5em' }}
              />
              {position}
            </Label>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }

}

export default RowPlayer;
