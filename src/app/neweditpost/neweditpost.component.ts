import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../entities/Post';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-neweditpost',
  templateUrl: './neweditpost.component.html',
  styleUrls: ['./neweditpost.component.scss']
})
export class NeweditpostComponent implements OnInit {
  public selectedPost: Post;
  public title: string;
  public postForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private tempDataService: DataService, private fb: FormBuilder) { }

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

    this.postForm = this.fb.group({
      title: [this.selectedPost.title],
      text: [this.selectedPost.text],
      id: [this.selectedPost.id],
    });
  }

  onSubmitPost(): void {
    this.selectedPost = this.postForm.value;
    this.selectedPost.createdDate = new Date();
    if (this.title === 'New post') {
      this.selectedPost.id = Math.floor(Math.random() * 100);
      console.log(this.selectedPost.id);
      this.tempDataService.addPost(this.selectedPost);
    } else {
      console.log(this.selectedPost.id);
      this.tempDataService.editPost(this.selectedPost);
    }
    this.router.navigate(['/posts']);
  }

}
