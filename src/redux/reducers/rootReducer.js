import { combineReducers } from 'redux';
import { property, sortBy } from './reducers';

const rootReducer = combineReducers({
  property,
  sortBy
});

export default rootReducer;
