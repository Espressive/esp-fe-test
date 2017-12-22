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
};


export default appThunks;
