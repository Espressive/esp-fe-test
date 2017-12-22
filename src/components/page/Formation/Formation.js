import React, { Component }   from 'react';
import PropTypes              from 'prop-types';
import { connect }            from 'react-redux';

import {
  Grid,
  Header,
  Dropdown,
}                             from 'semantic-ui-react';
import FormationRowPlayers    from '../../display/FormationRowPlayers';
import Position               from '../../../globals/constants/Position';
import appThunks              from '../../../actions/appThunks';

const propTypes = {
  loadFormations : PropTypes.func.isRequired,
  formations     : PropTypes.array,
};
const defaultProps = { formations: [] };

class Formation extends Component {

  constructor(props) {
    super(props);
    this.state = { formation: '4-4-2' };

    this.handleFormationSet = this.handleFormationSet.bind(this);
  }

  componentWillMount() {
    this.props.loadFormations();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleFormationSet(e,data) {
    this.setState({ formation: data.value });
  }

  render() {
    const { formations } = this.props;

    const formationsOptions = formations.map((f) => ({
      key   : f,
      text  : f,
      value : f,
    })); // Semantic Ui Dropdown requires options formatted with these three values

    const forwards = [null, 9, 24];
    const midfielders = [11,null,null,19];
    const defenders = [18,6,null,24];
    const keeper = [33];

    const { formation } = this.state;
    const rows = formation.split('-').map(Number);

    return (
      <Grid
        data-component='Formation'
        padded
      >
        <Grid.Row>
          <Grid.Column width={12}>
            <Header content='Formation' />
          </Grid.Column>
          <Grid.Column
            textAlign='right'
            width={4}
          >
            <Dropdown
              onChange={this.handleFormationSet}
              options={formationsOptions}
              text={formation}
              value={formation}
            />
          </Grid.Column>
        </Grid.Row>
        <FormationRowPlayers
          maxPlayers={rows[2]}
          players={forwards}
          position={Position[0]}
        />
        <FormationRowPlayers
          maxPlayers={rows[1]}
          players={midfielders}
          position={Position[1]}
        />
        <FormationRowPlayers
          maxPlayers={rows[0]}
          players={defenders}
          position={Position[2]}
        />
        <FormationRowPlayers
          players={keeper}
          position={Position[3]}
        />
      </Grid>
    );
  }

}

Formation.propTypes = propTypes;
Formation.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch) => ({
  loadFormations: () => {
    dispatch(appThunks.loadFormations());
  },
});

const mapStateToProps = (state) => ({ formations: state.formations });

export default connect(mapStateToProps, mapDispatchToProps)(Formation);

