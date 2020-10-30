import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-directive',
  templateUrl: './ang-directive.component.html',
  styleUrls: ['./ang-directive.component.css']
})
export class AngDirectiveComponent  {

  courses = [];

  viewMode = '';

  employees = [
    {id: 1, name: 'Dheeraj'},
    {id: 2, name: 'Neha'},
    {id: 3, name: 'Random'}
  ];

  isSaveVar = true;

  onAdd(){
    this.employees.push({id: 4, name: 'Fourth Person'});
  }
  onRemove(emp){
    const index = this.employees.indexOf(emp);
    this.employees.splice(index, 1);
  }
  isSave(){
    return this.isSaveVar;
  }

}
