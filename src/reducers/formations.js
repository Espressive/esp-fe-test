const formations = (state = [], action) => {
  switch (action.type) {

    case 'ADD_FORMATIONS':
      return [
        ...state,
        ...action.formations,
      ];
    default:
      return state;

  }
};

export default formations;
