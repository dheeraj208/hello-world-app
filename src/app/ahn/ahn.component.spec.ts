import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhnComponent } from './ahn.component';

describe('AhnComponent', () => {
  let component: AhnComponent;
  let fixture: ComponentFixture<AhnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
