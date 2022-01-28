import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfarmingtipsDetailsComponent } from './getfarmingtips-details.component';

describe('GetfarmingtipsDetailsComponent', () => {
  let component: GetfarmingtipsDetailsComponent;
  let fixture: ComponentFixture<GetfarmingtipsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfarmingtipsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfarmingtipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
