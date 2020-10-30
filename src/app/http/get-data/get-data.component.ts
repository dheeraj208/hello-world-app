import { BadInput } from './../../common/bad-input';
import { throwError } from 'rxjs';
import { NotFoundError } from './../../common/not-found-error';
import { AppErrors } from './../../common/app-errors';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {   }

  ngOnInit(): void {
      this.service.getAll()
      .subscribe(
        (data: any[]) => {
          this.posts = data.slice(0, 3);
        },
        (error: Error) => {
          if (error instanceof BadInput) {
            alert('Bad Input Request');
          }
          else{
            throwError(error);
          }
        },
        // (err: AppErrors) => {
        //   if(err instanceof NotFoundError){
        //  // this.form.setErrors(err.json())
        //   alert("Something went wrong. Title Not Found");
        //   console.log(err.originalError);
        //   }else{
        //     alert('Name not resolved.');
        //     console.log(err.originalError);
        //   }
        // },
        // () => {
        //   console.log('All titles fetched...');
        // }
      );
  }

  addTitle(input: HTMLInputElement): void {
    const post = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(
        (data) => {
          //post.id = data.id;
          this.posts.unshift(post);
        },
        (err: AppErrors) => {
          if (err instanceof NotFoundError) {
            // this.form.setErrors(err.json())
            alert('Something went wrong. Title Not Found');
            console.log(err);
          } else {
            throwError(err);
          }
        },
      );
  }

  updateTitle(post){
     this.service.update(post)
      .subscribe(
        (updatedPost) => {
          //console.log(updatedPost.title);
          post.isRead = false;
          console.log(post.isRead);
        });
  }

  deleteTitle(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppErrors) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          }
          else{
            throwError(error);
          }
        }
      );
  }

}
