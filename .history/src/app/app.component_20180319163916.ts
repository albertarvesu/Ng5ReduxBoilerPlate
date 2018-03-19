import { Component, OnInit } from '@angular/core';

import { PostsActions } from './actions/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {

  }

}
