import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPostComponent } from './components/new-post/new-post.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  exports: []
})
export class FeedModule { }
