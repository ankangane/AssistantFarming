import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieroperationComponent } from './supplieroperation.component';

describe('SupplieroperationComponent', () => {
  let component: SupplieroperationComponent;
  let fixture: ComponentFixture<SupplieroperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplieroperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplieroperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
