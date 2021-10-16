import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat suscipit esse quisquam ea aliquid, quasi, dolor, labore dolores explicabo saepe nostrum! Voluptates voluptatibus asperiores iure libero aliquam, soluta exercitationem.';

  posts: Post[] = []
  pageItem: number = 1;
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getAllPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
