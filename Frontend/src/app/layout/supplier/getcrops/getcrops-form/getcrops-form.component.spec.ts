import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcropsFormComponent } from './getcrops-form.component';

describe('GetcropsFormComponent', () => {
  let component: GetcropsFormComponent;
  let fixture: ComponentFixture<GetcropsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcropsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
