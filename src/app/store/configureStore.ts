import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// Epics
import { PostsEpics } from '../epics/posts';

// Reducers
import { rootReducer } from '../reducers';

import { Post } from './../models/Post';

export interface IAppState {
  posts: {
    isFetching: boolean;
    hasError: boolean,
    error: string,
    data: Post[],
  };
}

@NgModule({
  imports: [
    NgReduxModule,
  ],
  declarations: [],
  providers: []
})

export class StoreModule {
  constructor(
    private store: NgRedux<IAppState>,
    private devTools: DevToolsExtension,
    private postsEpics: PostsEpics,
  ) {

    let enhancers = [];

    const rootEpic = combineEpics(
      this.postsEpics.getPosts,
      this.postsEpics.clearPosts,
    );

    let middlewares = [
      createEpicMiddleware(rootEpic),
    ];

    if (environment.production === false && this.devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
      middlewares = [...middlewares, createLogger()];
    }

    this.store.configureStore(
      rootReducer,
      {} as IAppState,
      middlewares,
      enhancers
    );
  }
}


