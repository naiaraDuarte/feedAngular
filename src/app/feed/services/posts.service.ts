import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly URL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  listPosts() {
    return this.http.get<Post[]>(this.URL);
  }

  createPost(data: Post) {
    console.log(data);
    
    return this.http.post(this.URL, data);
  }
}
