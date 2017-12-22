import React, { Component } from 'react';
import { connect }            from 'react-redux';

import {
  Grid,
  Header,
  Dropdown,
}                           from 'semantic-ui-react';
import FormationRowPlayers  from '../../display/FormationRowPlayers';
import Position             from '../../../globals/constants/Position';

class Formation extends Component {

  constructor(props) {
    super(props);
    this.state = { formation: '4-4-2' };

    this.handleFormationSet = this.handleFormationSet.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleFormationSet(e,data) {
    this.setState({ formation: data.value });
    // console.warn(data.value);
  }

  render() {
    // TODO: This should be provided from the /api/v1/formations
    const formations = [
      {
        key   : '4-4-2',
        text  : '4-4-2',
        value : '4-4-2',
      },
      {
        key   : '4-3-3',
        text  : '4-3-3',
        value : '4-3-3',
      },
      {
        key   : '4-5-1',
        text  : '4-5-1',
        value : '4-5-1',
      },
      {
        key   : '5-3-2',
        text  : '5-3-2',
        value : '5-3-2',
      },
      {
        key   : '3-4-3',
        text  : '3-4-3',
        value : '3-4-3',
      },
      {
        key   : '3-5-2',
        text  : '3-5-2',
        value : '3-5-2',
      },
    ];

    // TODO: These will be set in /api/v1/team_selection
    const forwards = [null,9, 24];
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
              options={formations}
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

const mapDispatchToProps = (dispatch) => ({
  loadFormations: () => {
    dispatch;
  },
});

const mapStateToProps = (state) => ({ formations: state.formations });

export default connect(mapStateToProps, mapDispatchToProps)(Formation);

