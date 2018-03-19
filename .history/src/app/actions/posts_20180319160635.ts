import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { GET_POSTS } from './../constants/actionTypes';
import { Action } from 'redux';

@Injectable()
export class PostsActions {

  @dispatch()
  getEvents = (payload: any) => ({
    type: GET_POSTS,
    payload,
  } as Action)

}
