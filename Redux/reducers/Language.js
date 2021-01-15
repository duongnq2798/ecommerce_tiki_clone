import {CHANGE_LANGUAGE} from '../actions/index';

var initialState = {
  language: 'vi',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    default:
      return state;
  }
};

export default languageReducer;
