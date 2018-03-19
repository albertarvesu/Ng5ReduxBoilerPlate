import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { PostsActions } from './actions/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @select(state => state.posts) posts$: Observable<string>;

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {
    this.postsActions.getPosts();
  }

}
