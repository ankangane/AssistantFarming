import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecropDetailFormComponent } from './deletecrop-detail-form.component';

describe('DeletecropDetailFormComponent', () => {
  let component: DeletecropDetailFormComponent;
  let fixture: ComponentFixture<DeletecropDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecropDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecropDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
