import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../posts/post.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
