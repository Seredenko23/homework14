import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Output() getPost = new EventEmitter<number>();

  get() {
    this.getPost.emit(this.user.id);
  }

  constructor() { }

}
