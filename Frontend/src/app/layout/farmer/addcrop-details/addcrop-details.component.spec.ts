import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcropDetailsComponent } from './addcrop-details.component';

describe('AddcropDetailsComponent', () => {
  let component: AddcropDetailsComponent;
  let fixture: ComponentFixture<AddcropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcropDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
