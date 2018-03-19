import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostsActions } from './actions/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @select(state => state.posts) appServerUrl$: Observable<string>;

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {
    this.postsActions.getPosts();
  }

}
