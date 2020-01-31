import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // @ts-ignore
    return this.http.get(this.BASE_URL + '/users');
  }

  getPosts(id: number) {
    return this.http.get(`${this.BASE_URL}/posts?userId=${id}`);
  }
}

