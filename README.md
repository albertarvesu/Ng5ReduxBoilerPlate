
# Ng5ReduxBoilerPlate

This project shows you a basic Redux setup for an Angular Project. Generated using the latest version of Angular (version 5)

## Packages Used

1. redux
2. @angular-redux/store
3. redux-observable
4. redux-logger

### Action
Located in `/src/app/actions`, this does dispatch the action type and payload if available
```
@dispatch()
getPosts  = () => ({
  type: GET_POSTS,
} as  Action)
```
### Epic
Located in `src/app/epics` subdirectory, uses the `redux-observable` middleware to listen to dispatched action, asynchronously call the Backend API and dispatch another action based on the response of the API call.
```
getPosts  = (action$:  ActionsObservable<any>, store) => {
  return  action$.ofType(GET_POSTS)
    .mergeMap(({ payload }) => {
      return  this.postsApi.getPosts(store, payload)
        .map(result  => ({
          type: GET_POSTS_SUCCESS,
          payload: result.json(),
        }))
        .catch(error  =>  Observable.of({
          type: GET_POSTS_FAILED,
          payload: error.xhr.response,
        }));
     });
}
```
### API
Located in `src/app/api`, a simple interface for fetching resources using Angular's built-in HttpModule.
```
getPosts = () => {
  const options = new RequestOptions({
    params: {
      // in case we needed the pass any parameter to the API
    },
  });
  return this.http.get(`${environment.apiUrl}/posts`, options);
}
```
### Reducer
A set of pure functions that specify how the state of application should change depending on what actions where sent to the store.
```
export const posts = (state = initialState, action) => {
  switch (action.type) {
    ... // Removed for brevity
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        hasError: false,
      };

     case CLEAR_POSTS_SUCCESS:
     return {
        ...state,
        data: [],
        isFetching: false,
        hasError: false,
      };
    ... // Removed for brevity
  }
};
```
### Store Configuration
```
    let enhancers = [];

    const rootEpic = combineEpics(
      this.postsEpics.getPosts,
	  ...
    );
    let middlewares = [
      createEpicMiddleware(rootEpic),
    ];

    if (this.devTools.isEnabled()) {
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
```

## Backend API
https://jsonplaceholder.typicode.com/