const players = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TEAM_SELECTION':
      return Object.assign({}, state, action.team_selection);
    default:
      return state;
    case 'REMOVE_PLAYER_TEAM_SELECTION':
      return state

  }
};
const initialState = {
  defenders: [],
  forwards: [],
  keeper: [],
  midfielders: [],
}
export default players;
