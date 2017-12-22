const formations = (state = [], action) => {
  switch (action.type) {

    case 'ADD_FORMATIONS': {
      const newState = [
        ...state,
        ...action.formations,
      ];
      return newState;
    }

    default:
      return state;

  }
};

export default formations;
