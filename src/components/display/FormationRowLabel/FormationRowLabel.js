import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
} from 'semantic-ui-react';

const propTypes = {
  label : PropTypes.string.isRequired,
  count : PropTypes.number,
};

const defaultProps = { count: null };

class FormationRowLabel extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const {
      count,
      label,
    } = this.props;

    return (
      <Grid.Row>
        <Grid.Column>
          <Header
            as='h4'
            content={label}
            dividing
            subheader={count &&
              <Header.Subheader
                content={'(' + count + ')'}
                style={{ float: 'right' }}
              />
            }
          />
        </Grid.Column>
      </Grid.Row>
    );
  }

}

FormationRowLabel.propTypes = propTypes;

FormationRowLabel.defaultProps = defaultProps;

export default FormationRowLabel;
