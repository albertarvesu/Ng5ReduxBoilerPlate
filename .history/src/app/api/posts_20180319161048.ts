import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Store } from 'redux';

@Injectable()
export class PostsApi {

  constructor(
    private http: Http
  ) {}

  getEvents = (store, payload) => {

    const options = new RequestOptions({
      params: {
        // in case we needed the pass any parameter to the API
      },
    });

    // if (environment.production === false && environment.mock) {
    //   return this.http.get('./assets/mock/events.json');
    // }

    return this.http.get(`${environment.apiUrl}/posts`, options);
  }
}
