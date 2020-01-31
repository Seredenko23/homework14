import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListModule} from './user-list/user-list.module';
import { PostListComponent } from './post-list/post-list.component';
import {PostListModule} from './post-list/post-list.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    UserListModule,
    PostListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
