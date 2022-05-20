import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  @Output() saveEmit = new EventEmitter()
  @Input() postForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.postForm.valid) this.saveEmit.emit(this.postForm)
  }
}
