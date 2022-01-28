import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddstatusDetailFormComponent } from './updateaddstatus-detail-form.component';

describe('UpdateaddstatusDetailFormComponent', () => {
  let component: UpdateaddstatusDetailFormComponent;
  let fixture: ComponentFixture<UpdateaddstatusDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddstatusDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddstatusDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
