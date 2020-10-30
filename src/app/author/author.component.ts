import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    // this.authorCount = this.authors.length;
  }

  title = 'List of Authors';
  authors = [];
  imagePath = './../assets/butterfly.jpg';
  colSpan = 2;
  // authorCount: number;

  isActive = true;

  // Use this method with template variable
  // onKeyUp(email:string){
  //   console.log(email);
  // }
  email = 'me@example.com';

  text = 'This is really long string. Day is sunny, go out and get some fresh air.';
  onDivClicked(){
    console.log('Div was clicked!');
  }
  onClick($event){
    $event.cancelBubble = true;
    console.log('Save Button was clicked', $event);
  }
  onKeyUp(){
    console.log(this.email);
  }

  ngOnInit(): void {
  }

}
