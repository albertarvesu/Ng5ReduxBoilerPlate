import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { GET_POSTS } from './../constants/actionTypes';

@Injectable()
export class EventsActions {

  @dispatch()
  getEvents = payload => ({
    type: GET_POSTS,
    payload,
  })

};
