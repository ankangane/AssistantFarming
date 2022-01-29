import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcropsComponent } from './getcrops.component';

describe('GetcropsComponent', () => {
  let component: GetcropsComponent;
  let fixture: ComponentFixture<GetcropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
