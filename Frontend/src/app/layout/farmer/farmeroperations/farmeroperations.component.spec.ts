import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmeroperationsComponent } from './farmeroperations.component';

describe('FarmeroperationsComponent', () => {
  let component: FarmeroperationsComponent;
  let fixture: ComponentFixture<FarmeroperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmeroperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmeroperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
