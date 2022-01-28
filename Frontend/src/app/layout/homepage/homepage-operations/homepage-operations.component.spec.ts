import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageOperationsComponent } from './homepage-operations.component';

describe('HomepageOperationsComponent', () => {
  let component: HomepageOperationsComponent;
  let fixture: ComponentFixture<HomepageOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
