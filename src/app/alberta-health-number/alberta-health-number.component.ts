import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AHNValidator } from './ahn-validator';

@Component({
  selector: 'alberta-health-number',
  templateUrl: './alberta-health-number.component.html',
  styleUrls: ['./alberta-health-number.component.css'],
})
export class AlbertaHealthNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    ahn: new FormControl('', [
      Validators.required,
      AHNValidator.validateAHN,
    ])
  });

  get ahn() {
    return this.form.get('ahn');
  }

  validate(){
    console.log(this.ahn.value);
    if(!this.ahn){
      this.form.setErrors({
        inValidAHN: true
      });
    }
  }
}
