import * as types from '../actions/types';

const property = (state = {}, { type, payload }) => {
  switch (type) {
    case types.ADD_PROPERTY:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};

export default property;
