import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadvertisementDetailsComponent } from './getadvertisement-details.component';

describe('GetadvertisementDetailsComponent', () => {
  let component: GetadvertisementDetailsComponent;
  let fixture: ComponentFixture<GetadvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetadvertisementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
