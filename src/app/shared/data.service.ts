import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Post} from '../post-list/shared/post.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private dataSource = new BehaviorSubject<Post[]>([]);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data): void {
    this.dataSource.next(data);
  }
}
