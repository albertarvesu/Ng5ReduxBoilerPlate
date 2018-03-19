import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Store
import { StoreModule } from './store/configureStore';

// Actions
import { PostsActions } from './actions/posts';

// Epics
import { PostsEpics } from './epics/posts';

// Api
import { PostsApi } from './api/posts';

import { AppComponent } from './app.component';


console.warn(StoreModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
  ],
  providers: [
    PostsActions,
    PostsEpics,
    PostsApi,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
