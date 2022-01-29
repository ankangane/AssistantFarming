import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddstatusDetailsComponent } from './updateaddstatus-details.component';

describe('UpdateaddstatusDetailsComponent', () => {
  let component: UpdateaddstatusDetailsComponent;
  let fixture: ComponentFixture<UpdateaddstatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaddstatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddstatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
