import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethod = [
    {id: 1 , name: 'Email'},
    {id: 2 , name: 'Phone'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  submit(f){
    console.log(f.value.firstName);
  }

}
