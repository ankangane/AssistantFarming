import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecropDetailsComponent } from './deletecrop-details.component';

describe('DeletecropDetailsComponent', () => {
  let component: DeletecropDetailsComponent;
  let fixture: ComponentFixture<DeletecropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecropDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
