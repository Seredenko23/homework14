import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../user-list/shared/user.model';
import {Post} from '../post-list/shared/post.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + '/users');
  }

  getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?userId=${id}`);
  }
}

