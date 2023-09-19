import { GET_JOBS } from "../actions";

const initialState = {
  favourite: {
    list: []
  },
  jobs: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload]
        }
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter(fav => fav !== action.payload)
        }
      };

    case GET_JOBS:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
