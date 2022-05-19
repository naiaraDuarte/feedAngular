import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  @Output() newPost = new EventEmitter()
  postForm!: FormGroup;

  constructor(private service: PostsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]]
    })
  }

  save() {
    if (this.postForm.valid)
    this.service.createPost(this.postForm.value).subscribe(
      success => {
        console.log('frfr', success); 
        this.postForm.reset()
        this.newPost.emit(success)
      }
    );
  }
}
