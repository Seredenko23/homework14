import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ApiService } from '../rest/api.service';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from '../shared/data.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [ UserComponent ],
  exports: [
    UserComponent
  ],
  providers: [
    ApiService,
    DataService
  ]
})

export class UserListModule { }
