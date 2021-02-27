import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../entities/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public tempData: Post[];
  public displayedColumns: string[] = ['title', 'createdDate', 'media', 'action'];

  constructor(private router: Router, private tempDataService: DataService) {
    // this.tempData = this.tempDataService.getPosts();
  }

  ngOnInit(): void {
    this.tempData = this.tempDataService.getPosts();
  }

  deletePost(id): void {
    this.tempDataService.deletePost(id);
    console.log('delete id...' + id);
    this.tempData = this.tempData.filter(item => item.id !== id);
    this.tempDataService.deletePost(id);
  }
}
