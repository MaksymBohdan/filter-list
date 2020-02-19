import { combineReducers } from 'redux';
import { property, sortBy, filterBy, pagination } from './reducers';

const rootReducer = combineReducers({
  property,
  sortBy,
  filterBy,
  pagination
});

export default rootReducer;
