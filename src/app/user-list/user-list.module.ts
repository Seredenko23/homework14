import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ApiService } from '../rest/api';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  declarations: [ UserComponent ],
  exports: [
    UserComponent
  ],
  providers: [ ApiService ]
})

export class UserListModule { }
