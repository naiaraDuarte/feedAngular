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
    return this.http.post(this.URL, data);
  }

  updatePost(data: Post) {
    return this.http.put(`${this.URL}/${data.id}`, data);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
