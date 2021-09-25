import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: Date.now(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // We use filter because filter method will create new array and will not touch the
      // actual actual. So, it is best way to delete an item.
      let updatedArray = state.results.filter((row) => row.id !== action.value);
      return {
        ...state,
        results: updatedArray,
      };

    default:
      return state;
  }
};

export default result;
