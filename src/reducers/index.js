import { combineReducers } from 'redux';
import VoteReducer from './search-terms';

const rootReducer = combineReducers({
  votebar: VoteReducer
});

export default rootReducer;
