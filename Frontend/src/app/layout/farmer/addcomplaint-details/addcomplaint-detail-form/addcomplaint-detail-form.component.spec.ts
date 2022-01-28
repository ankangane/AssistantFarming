import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomplaintDetailFormComponent } from './addcomplaint-detail-form.component';

describe('AddcomplaintDetailFormComponent', () => {
  let component: AddcomplaintDetailFormComponent;
  let fixture: ComponentFixture<AddcomplaintDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomplaintDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
