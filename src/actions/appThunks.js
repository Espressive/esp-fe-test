import request from 'superagent';

const API_ENDPOINT = 'http://localhost:4001';

const appThunks = {
  loadFormations: () => (dispatch) => {
    request
      .get(`${API_ENDPOINT}/api/v1/formations`)
      .then(function (res) {
        dispatch({
          type       : 'ADD_FORMATIONS',
          formations : res.body,
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
          type    : 'ADD_PLAYERS',
          players : res.body,
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
                    type: 'ADD_TEAM_SELECTION',
                    team_selection: res.body
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
};


export default appThunks;
