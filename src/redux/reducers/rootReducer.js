import { combineReducers } from 'redux';
import { property, sortBy, filterBy } from './reducers';

const rootReducer = combineReducers({
  property,
  sortBy,
  filterBy
});

export default rootReducer;
