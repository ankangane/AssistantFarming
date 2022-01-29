import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomplaintDetailsComponent } from './addcomplaint-details.component';

describe('AddcomplaintDetailsComponent', () => {
  let component: AddcomplaintDetailsComponent;
  let fixture: ComponentFixture<AddcomplaintDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomplaintDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
