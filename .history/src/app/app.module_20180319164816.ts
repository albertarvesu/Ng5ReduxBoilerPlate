import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Store
import { StoreModule } from './store/configureStore';

// Actions
import { PostsActions } from './actions/posts';

// Epics
import { PostsEpics } from './epics/posts';

// Api
import { PostsApi } from './api/posts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
