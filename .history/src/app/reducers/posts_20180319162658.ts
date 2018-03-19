import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
} from './../constants/actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  error: null,
  data: {},
};

export const posts = (state = initialState, action) => {
  switch (action.type) {

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

    case GET_POSTS_FAILED:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload,
      };

    default:
      return state;
  }
}
