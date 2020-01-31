import { NgModule } from '@angular/core';
import { DataService } from '../shared/data.service';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [],
  declarations: [ PostComponent ],
  exports: [
    PostComponent
  ],
  providers: [
    DataService
  ]
})

export class PostListModule { }
