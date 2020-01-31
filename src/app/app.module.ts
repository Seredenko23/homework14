import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListModule} from './user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
