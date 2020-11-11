const initialState = {
  allusers: {},
  allproducts: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_ALL_USERS":
      return Object.assign({}, state, { allusers: action.allusers });
    case "RECEIVE_ADMIN_PRODUCTS":
      return Object.assign({}, state, { allproducts: action.allproducts });
    default:
      return state;
  }
};
