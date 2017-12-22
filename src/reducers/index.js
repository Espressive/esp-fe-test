import { combineReducers } from 'redux';
import formations          from './formations';
import players             from './players';
import teamSelection       from './teamSelection';

const appReducer = combineReducers({
  formations,
  players,
  teamSelection,
});

export default appReducer;
