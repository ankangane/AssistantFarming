import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordDetailFormComponent } from './changepassword-detail-form.component';

describe('ChangepasswordDetailFormComponent', () => {
  let component: ChangepasswordDetailFormComponent;
  let fixture: ComponentFixture<ChangepasswordDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
