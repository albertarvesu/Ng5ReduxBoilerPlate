import { combineReducers } from 'redux';

import { Post } from './../models/Post';

export interface IAppState {
  posts: Post[];
}
