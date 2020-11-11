import {SET_SEARCH} from '../constant'

const setSearch = function (searchString) {
    return {
      type: SET_SEARCH,
      searchString,
    };
  };

export const setSearchInStore = (busqueda) => (dispatch) => {
    return dispatch(setSearch(busqueda));
};