import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordDetailsComponent } from './changepassword-details.component';

describe('ChangepasswordDetailsComponent', () => {
  let component: ChangepasswordDetailsComponent;
  let fixture: ComponentFixture<ChangepasswordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
