import request from 'superagent';
import {positionHashMap} from '../globals/constants/Position'

const API_ENDPOINT = 'http://localhost:4001';

const appThunks = {
    addPlayer: (id, position, place) => (dispatch, getState) => {
        const { teamSelection } = getState()
        const positions = teamSelection[positionHashMap[position]]
        positions[place] = id
        request.post(`${API_ENDPOINT}/team_selection`).send({
            ...teamSelection,
            [positionHashMap[position]]: positions,
        }).then(res => {
            dispatch({
                team_selection: res.body,
                type: 'ADD_TEAM_SELECTION',
            })
        }).catch(err => {console.log(err.message)})
    },

    limitTeamSelectionRow: data => (dispatch, getState) => {
        const { teamSelection } = getState();
        const [MAXDEF,MAXMID,MAXFWD] = (data.split('-')).map(Number)

        let defenders = (new Array(MAXDEF).fill(null)).map(
            (element, index) =>
                element = teamSelection[positionHashMap['DEF']][index] ?
                    teamSelection[positionHashMap['DEF']][index] :
                    null
        )
        let midfielders = new Array(MAXMID).fill(null).map(
            (element, index) =>
                element = teamSelection[positionHashMap['DEF']][index] ?
                    teamSelection[positionHashMap['MID']][index] :
                    null
        )
        let forwards = new Array(MAXFWD).fill(null).map(
            (element, index) =>
                element = teamSelection[positionHashMap['FWD']][index] ?
                    teamSelection[positionHashMap['FWD']][index] :
                    null
        )

        request.post(`${API_ENDPOINT}/team_selection`).send({
            ...teamSelection,
            defenders,
            forwards,
            midfielders
        }).then(res => {
            dispatch({
                team_selection: res.body,
                type: 'ADD_TEAM_SELECTION',
            })
        }).catch(err =>{
                console.log({err})
            })
    },

    loadFormations: () => (dispatch) => {
    request
      .get(`${API_ENDPOINT}/api/v1/formations`)
      .then(function (res) {
        dispatch({
            formations : res.body,
            type       : 'ADD_FORMATIONS',
        });
      })
      .catch(function(err) {
        // err.message, err.response
      });
  },

  loadPlayers: () => (dispatch) => {
    request
      .get(`${API_ENDPOINT}/api/v1/players`)
      .then(function (res) {
        dispatch({
            players : res.body,
            type    : 'ADD_PLAYERS',
        });
      })
      .catch(function(err) {
        // err.message, err.response
      });
  },

    loadTeamSelection: () => dispatch => {
        request
            .get(`${API_ENDPOINT}/team_selection`)
            .then( res => {
                dispatch({
                    team_selection: res.body,
                    type: 'ADD_TEAM_SELECTION'
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    },

    removePlayer: (id, position) => (dispatch, getState) => {
        console.log(position)
        const { teamSelection } = getState()
        const positions = teamSelection[positionHashMap[position]]
        request.post(`${API_ENDPOINT}/team_selection`).send({
            ...teamSelection,
            [positionHashMap[position]]: positions.map(player => player !== id ? player : null),
        }).then(res => {
            dispatch({
                team_selection: res.body,
                type: 'ADD_TEAM_SELECTION',
            })
        }).catch(err => {console.log(err.message)})
    },
};


export default appThunks;
