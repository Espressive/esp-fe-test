import React, { Component }   from 'react';
import PropTypes              from 'prop-types';
import { connect }            from 'react-redux';

import {
  Grid,
  Header,
  Dropdown,
  Transition,
}                             from 'semantic-ui-react';
import FormationRowPlayers    from '../../display/FormationRowPlayers';
import Position               from '../../../globals/constants/Position';
import appThunks              from '../../../actions/appThunks';


class Formation extends Component {

  static propTypes = {
    loadFormations : PropTypes.func.isRequired,
    formations     : PropTypes.array,
  };

  static defaultProps = { formations: [] };

  state = { formation: '4-4-2' }

  componentDidMount() {
    this.props.loadFormations();
  }

  handleFormationSet = (e,data) => {
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
      <Transition
        animation='fade'
        duration={300}
        transitionOnMount
      >
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
          {/* NOTE: This is the FWD row */}
          <FormationRowPlayers
            maxPlayers={rows[2]}
            players={forwards}
            position={Position[0]}
          />
          {/* NOTE: This is the MID row */}
          <FormationRowPlayers
            maxPlayers={rows[1]}
            players={midfielders}
            position={Position[1]}
          />
          {/* NOTE: This is the DEF row */}
          <FormationRowPlayers
            maxPlayers={rows[0]}
            players={defenders}
            position={Position[2]}
          />
          {/* NOTE: This is the GOL row */}
          <FormationRowPlayers
            players={keeper}
            position={Position[3]}
          />
        </Grid>
      </Transition>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  loadFormations: () => {
    dispatch(appThunks.loadFormations());
  },
});

const mapStateToProps = (state) => ({ formations: state.formations });

export default connect(mapStateToProps, mapDispatchToProps)(Formation);

