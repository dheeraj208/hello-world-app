import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertaHealthNumberComponent } from './alberta-health-number.component';

describe('AlbertaHealthNumberComponent', () => {
  let component: AlbertaHealthNumberComponent;
  let fixture: ComponentFixture<AlbertaHealthNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbertaHealthNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertaHealthNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
