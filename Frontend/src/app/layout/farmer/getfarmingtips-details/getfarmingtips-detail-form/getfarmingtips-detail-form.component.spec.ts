import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfarmingtipsDetailFormComponent } from './getfarmingtips-detail-form.component';

describe('GetfarmingtipsDetailFormComponent', () => {
  let component: GetfarmingtipsDetailFormComponent;
  let fixture: ComponentFixture<GetfarmingtipsDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfarmingtipsDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfarmingtipsDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
