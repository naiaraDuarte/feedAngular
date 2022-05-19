import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  listFeedPost!: Post[];

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.listPosts().subscribe(data => this.listFeedPost = data);
  }

}
