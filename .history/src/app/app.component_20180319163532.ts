import { Component } from '@angular/core';

import { PostsActions } from './actions/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private postsActions: PostsActions){}

}
