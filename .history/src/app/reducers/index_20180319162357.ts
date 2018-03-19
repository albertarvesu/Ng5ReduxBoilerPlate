import { combineReducers } from 'redux';

import { Post } from './../models/Post';

import { posts } from './posts';

export interface IAppState {
  posts: Post[];
}

export const rootReducer = combineReducers<IAppState>({
  posts,
})
