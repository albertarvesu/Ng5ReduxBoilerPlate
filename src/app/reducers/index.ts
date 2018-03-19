import { combineReducers } from 'redux';

import { Post } from './../models/Post';

import { posts } from './posts';

export interface IAppState {
  posts: {
    isFetching: boolean;
    hasError: boolean,
    error: string,
    data: Post[],
  };
}

export const rootReducer = combineReducers<IAppState>({
  posts,
});
