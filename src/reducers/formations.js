const formations = (state = [], action) => {
  switch (action.type) {

    case 'ADD_FORMATIONS': {
      // We don't want to merge states yet
      // const newState = [
      //   ...state,
      //   ...action.formations,
      // ];

      const newState = [...action.formations];
      return newState;
    }

    default:
      return state;

  }
};

export default formations;
