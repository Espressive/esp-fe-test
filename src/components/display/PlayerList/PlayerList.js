import React, { Component } from 'react';
import {
  Grid,
  Segment,
}                           from 'semantic-ui-react';

const propTypes = {};

const defaultProps = {};

class PlayerList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <Grid.Column width={6}>
        <Segment content='PlayerList' />
      </Grid.Column>
    );
  }

}

PlayerList.propTypes = propTypes;

PlayerList.defaultProps = defaultProps;

export default PlayerList;
