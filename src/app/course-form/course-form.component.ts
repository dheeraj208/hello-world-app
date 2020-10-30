import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseCategory = [
      {id: 1, name: 'Development'},
      {id: 2, name: 'Art'},
      {id: 3, name: 'Science'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  submit(f){
    console.log(f);
  }
}
