import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {Post} from './shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private posts: Post[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentData.subscribe(posts => {
      this.posts = posts;
    });
  }
}
