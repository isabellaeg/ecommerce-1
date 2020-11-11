const initialState = {
<<<<<<< HEAD
    allusers:{},
    allproducts: {},
    allCategory: {}
}

export default (state = initialState, action) => {

    switch(action.type){

        case "RECEIVE_ALL_USERS":
            return Object.assign({},state,{allusers:action.allusers});
        case "RECEIVE_ADMIN_PRODUCTS":
            return Object.assign({},state,{allproducts:action.allproducts});
        case "RECEIVE_ADMIN_CATEGORY":
            return Object.assign({},state,{allCategory:action.allCategory});
        default:
            return state;
    }
    
}
=======
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
>>>>>>> 8007bdf16ab07b5257057cc499d950160f23eb8c
