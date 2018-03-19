import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { MatTableModule } from '@angular/material';

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
    MaterialModule,
    MatTableModule,
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
