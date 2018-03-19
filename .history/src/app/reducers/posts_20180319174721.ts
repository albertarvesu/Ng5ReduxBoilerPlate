import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  CLEAR_POSTS,
  CLEAR_POSTS_SUCCESS,
} from './../constants/actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  error: null,
  data: [],
};

export const posts = (state = initialState, action) => {
  switch (action.type) {

    case CLEAR_POSTS:
    case GET_POSTS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        hasError: false,
      };

     case CLEAR_POSTS_SUCCESS:
     return {
        ...state,
        data: [],
        isFetching: false,
        hasError: false,
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
