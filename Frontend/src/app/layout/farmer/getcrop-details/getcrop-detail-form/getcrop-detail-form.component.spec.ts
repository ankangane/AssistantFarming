import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcropDetailFormComponent } from './getcrop-detail-form.component';

describe('GetcropDetailFormComponent', () => {
  let component: GetcropDetailFormComponent;
  let fixture: ComponentFixture<GetcropDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcropDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcropDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
