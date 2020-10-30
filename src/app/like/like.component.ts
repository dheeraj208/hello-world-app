import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }
  @Input('is-liked')isLiked: boolean;
  @Input('like-count')likesCount = 0;

  onClick(){
    this.isLiked = !this.isLiked;
    // this.likesCount += (this.isLiked) ? 1 : -1;

    if (!this.isLiked && this.likesCount > 0){
      this.likesCount -= 1;
    }
    if (this.isLiked){
      this.likesCount += 1;
    }

    console.log(`Button is ${this.isLiked} and Counter: ${this.likesCount}`);
  }

  ngOnInit(): void {
  }

}
