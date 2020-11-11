import {SET_SEARCH} from '../constant'

const initialState = {
    searchString: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { searchString: action.searchString });
    default:
      return state;
  }
}
