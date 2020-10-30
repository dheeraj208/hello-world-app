import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  get topics(){
    return  (this.form.get('topics') as FormArray);
  }
  constructor(fb: FormBuilder) {
    this.form3 = fb.group({
      name: fb.control('', Validators.required),
      contact: fb.group({
        email: fb.control(''),
        phone: fb.control('')
      }),
      topics: fb.array([])
    });
  }

  form = new FormGroup({
    topics: new FormArray([])
  });

  // Form Builder: If there many formgroups and formcontrols then amke use of formbuilder.
  // below we have one group with 2 controls and one sub group. which has 2 more controls (email & ph)
  form2 = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  // easy way to write above code
  form3;

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
