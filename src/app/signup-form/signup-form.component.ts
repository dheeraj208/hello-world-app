import { UsernameValidator } from './username-validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required,
                                    Validators.minLength(3),
                                    UsernameValidator.cannotContainSpace],
                                    UsernameValidator.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  login() {
    if (!this.username.value || !this.password.value) {
      this.form.setErrors({
        inValidLogin: true
      });
    }


  }
}
