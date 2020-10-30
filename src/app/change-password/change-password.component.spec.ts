import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(ChangePasswordComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component = new ChangePasswordComponent(new FormBuilder());
  });

  it('should create form with 3 controls', () => {
    expect(component.form.contains('oldPassword')).toBeTruthy();
    expect(component.form.contains('newPassword')).toBeTruthy();
    expect(component.form.contains('confirmPassword')).toBeTruthy();
  });


});
