import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcropDetailsComponent } from './getcrop-details.component';

describe('GetcropDetailsComponent', () => {
  let component: GetcropDetailsComponent;
  let fixture: ComponentFixture<GetcropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcropDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
