import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../entities/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: Post;
  @Output() deletePostEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(id: any): void {
    this.deletePostEmitter.emit(id);
  }

}
