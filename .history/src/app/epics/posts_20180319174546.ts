import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PostsApi } from '../api/posts';

import {
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
} from './../constants/actionTypes';

@Injectable()
export class PostsEpics {

  constructor(private postsApi: PostsApi) {}

  getPosts = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(GET_POSTS)
      .mergeMap(({ payload }) => {
        return this.postsApi.getPosts(store, payload)
          .map(result => ({
            type: GET_POSTS_SUCCESS,
            payload: result.json(),
          }))
          .catch(error => Observable.of({
            type: GET_POSTS_FAILED,
            payload: error.xhr.response,
          }));
        });
  }

  clearPosts = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(CLEAR_POSTS)
      .mergeMap(({ payload }) => {
        return Observable.of({
          type: CLEAR_POSTS_SUCCESS,
        })
        });
  }
}
