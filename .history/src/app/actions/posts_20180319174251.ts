import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { GET_POSTS } from './../constants/actionTypes';
import { Action } from 'redux';

@Injectable()
export class PostsActions {

  @dispatch()
  getPosts = () => ({
    type: GET_POSTS,
  } as Action)


  @dispatch()
  getPosts = () => ({
    type: GET_POSTS,
  } as Action)
}
