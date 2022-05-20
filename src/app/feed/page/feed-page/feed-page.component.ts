import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  listFeedPost!: Post[];
  postForm!: FormGroup;
  post!: Post;

  constructor(private service: PostsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.listPosts().subscribe(data => this.listFeedPost = data);
    this.postForm = this.fb.group({
      description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]]
    })
  }

  save (post: FormGroup) {
    console.log(this.post);
    
    // if (this.post.id) {
    //   this.post.description = post.value.description;
      
    //   this.service.updatePost(this.post).subscribe(
    //     success => {
    //       this.postForm.reset();
    //       this.post = new Post();
    //     }
    //   );
    // }else {
    //   this.service.createPost(post.value).subscribe(
    //     success => {
    //       this.postForm.reset()
    //       this.listFeedPost.push(success as Post)
    //     }
    //   );
    // }
  }

  selected(post: Post) {
    this.post = post;
    this.postForm.setValue({description: post.description}) 
  }

  del(id: number) {
    console.log(id);
    this.service.deletePost(id).subscribe(success => {
      let index = this.listFeedPost.findIndex(post => post.id  == id);
      this.listFeedPost.splice(index, 1);
    })
  }
}
