import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedPageComponent } from './page/feed-page/feed-page.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    NewPostComponent,
    FeedPageComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [HttpClientModule,]
})
export class FeedModule { }
