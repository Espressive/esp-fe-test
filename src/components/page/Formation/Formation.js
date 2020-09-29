import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Dropdown, Grid, Header, Transition,} from 'semantic-ui-react';
import appThunks from '../../../actions/appThunks';
import Position from '../../../globals/constants/Position';
import FormationRowPlayers from '../../display/FormationRowPlayers';


class Formation extends Component {

  static propTypes = {
    formations     : PropTypes.array,
    loadFormations : PropTypes.func.isRequired,
    loadTeamSelection : PropTypes.func.isRequired,
  };

  static defaultProps = { formations: [] };

  state = { formation: '4-4-2' }

  componentDidMount() {
    this.props.loadFormations();
    this.props.loadTeamSelection();
    this.props.loadPlayers();
  }

  handleFormationSet = (e,data) => {
    this.setState({ formation: data.value });
  }

  render() {
    const { formations, teamSelection, teamList } = this.props;

    const formationsOptions = formations.map((f) => ({
      key   : f,
      text  : f,
      value : f,
    })); // Semantic Ui Dropdown requires options formatted with these three values
    const { forwards, midfielders, defenders, keeper } = teamSelection;

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
            teamList={teamList}
            maxPlayers={rows[2]}
            players={forwards}
            position={Position[0]}
          />
          {/* NOTE: This is the MID row */}
          <FormationRowPlayers
            teamList={teamList}
            maxPlayers={rows[1]}
            players={midfielders}
            position={Position[1]}
          />
          {/* NOTE: This is the DEF row */}
          <FormationRowPlayers
            teamList={teamList}
            maxPlayers={rows[0]}
            players={defenders}
            position={Position[2]}
          />
          {/* NOTE: This is the GOL row */}
          <FormationRowPlayers
            teamList={teamList}
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
  loadPlayers: () => {
    dispatch(appThunks.loadPlayers())
  },
  loadTeamSelection: () => {
    dispatch(appThunks.loadTeamSelection());
  }
});

const mapStateToProps = (state) => ({
  formations: state.formations,
  teamList: state.players,
  teamSelection: state.teamSelection,
});

export default connect(mapStateToProps, mapDispatchToProps)(Formation);

