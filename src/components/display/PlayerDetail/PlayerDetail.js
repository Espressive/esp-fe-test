import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
  Grid,
  Segment,
}                           from 'semantic-ui-react';

const propTypes = { match: PropTypes.shape({ params: PropTypes.shape({ playerID: PropTypes.string }) }) };

const defaultProps = { match: null };

class PlayerDetail extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { playerID } = this.props.match.params;

    return (
      <Grid.Column width={10}>
        <Segment content={'PlayerDetail ' + playerID} />
      </Grid.Column>
    );
  }

}

PlayerDetail.propTypes = propTypes;

PlayerDetail.defaultProps = defaultProps;

export default PlayerDetail;
