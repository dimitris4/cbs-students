import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../entities/Post';

@Component({
  selector: 'app-neweditpost',
  templateUrl: './neweditpost.component.html',
  styleUrls: ['./neweditpost.component.scss']
})
export class NeweditpostComponent implements OnInit {
  public selectedPost: Post;
  public title: string

  constructor(private route: ActivatedRoute, private tempDataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        if (params.get('id') === 'create') {
          this.selectedPost = new Post();
          this.title = 'New post';
        } else {
          this.selectedPost = this.tempDataService.getPosts().find(post => post.id === params.get('id'));
          this.title = 'Edit post';
        }
      });
    console.log(this.selectedPost);
  }
}
