import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {Button, Card, Dimmer, Flag, Icon, Image, Label,} from 'semantic-ui-react';
import appThunks from '../../../actions/appThunks';
import Position from '../../../globals/constants/Position';

import defaultImg from '../../../image.png';


class RowPlayer extends Component {

  static propTypes = {
    className : PropTypes.string,
    country   : PropTypes.string.isRequired,
    firstName : PropTypes.string.isRequired,
    id        : PropTypes.number.isRequired,
    img       : PropTypes.string,
    lastName  : PropTypes.string.isRequired,
    position  : PropTypes.oneOf(Position).isRequired,
  };

  static defaultProps = {
    className : null,
    img       : null,
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
              onClick={() => this.remove(this.props.id, this.props.position)}
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

  remove = (id, position ) => {
    this.props.removePlayer(id, position)
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePlayer: (id, position) => {
    dispatch(appThunks.removePlayer(id, position));
  },
});

const mapStateToProps = (state) => ({
  teamSelection: state.teamSelection
});

export default connect(mapStateToProps, mapDispatchToProps)(RowPlayer);
