import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { PostsActions } from './actions/posts';

import { Post } from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @select(state => state.posts) posts$: Observable<string>;

  posts: Post[] = [];

  constructor(private postsActions: PostsActions) {
    this.onReceivedPosts = this.onReceivedPosts.bind(this);
  }

  ngOnInit() {
    this.postsActions.getPosts();

    this.posts$
      .subscribe(this.onReceivedPosts);
  }

  onReceivedPosts(posts) {
    this.posts = posts.data;
  }

}
