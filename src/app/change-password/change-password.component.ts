import { PasswordValidator } from './password-validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
  form: FormGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: new FormControl('', Validators.required, PasswordValidator.isOldPasswordValid),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, PasswordValidator.isPasswordMatched])
    });
  }

  // form = new FormGroup({
  //   'oldPassword': new FormControl('', Validators.required, PasswordValidator.isOldPasswordValid),
  //   'newPassword': new FormControl('', Validators.required),
  //   'confirmPassword': new FormControl('', [Validators.required, PasswordValidator.isPasswordMatched])
  // });


  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  changePassword(){

  }
}
