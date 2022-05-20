import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Output() updateEmit = new EventEmitter();
  @Output() deleteEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  update(post: Post) {
    this.updateEmit.emit(post)
  }

  del(post: Post) {
    this.deleteEmit.emit(post.id)
  }
}
