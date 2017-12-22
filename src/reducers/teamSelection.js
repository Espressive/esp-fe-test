const players = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_TEAM_SELECTION':
      return Object.assign({}, state, action.team_selection);
    default:
      return state;

  }
};

export default players;
