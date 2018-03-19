import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PostsApi } from '../api/posts';

import { GET_POSTS, GET_POSTS_FAILED } from './../constants/actionTypes';

@Injectable()
export class EventsEpics {

  constructor(
    private eventsApi: PostsApi,
  ) {}

  getEvents = (action$: ActionsObservable<any>, store) => {
    return action$.ofType(GET_EVENTS)
      .mergeMap(({ payload }) => {
        return this.eventsApi.getEvents(store, payload)
          .map(result => {
            const response = result.json();
            const hasError = response.code > 0;
            return {
              type: `${GET_EVENTS}_${hasError ? 'FAILED' : 'SUCCESS'}`,
              payload: hasError ? response.msg : response.data,
            };
          })
          .catch(error => Observable.of({
            type: GET_EVENTS_FAILED,
            payload: error.xhr.response,
          }));
        });
  }
}