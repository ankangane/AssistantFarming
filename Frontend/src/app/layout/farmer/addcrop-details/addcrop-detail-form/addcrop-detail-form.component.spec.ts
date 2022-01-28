import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcropDetailFormComponent } from './addcrop-detail-form.component';

describe('AddcropDetailFormComponent', () => {
  let component: AddcropDetailFormComponent;
  let fixture: ComponentFixture<AddcropDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcropDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcropDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
