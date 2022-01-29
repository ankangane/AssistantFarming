import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadvertisementDetailFormComponent } from './getadvertisement-detail-form.component';

describe('GetadvertisementDetailFormComponent', () => {
  let component: GetadvertisementDetailFormComponent;
  let fixture: ComponentFixture<GetadvertisementDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetadvertisementDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadvertisementDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
