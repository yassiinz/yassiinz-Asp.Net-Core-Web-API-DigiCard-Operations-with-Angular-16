import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCardRequestComponent } from './validation-card-request.component';

describe('ValidationCardRequestComponent', () => {
  let component: ValidationCardRequestComponent;
  let fixture: ComponentFixture<ValidationCardRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationCardRequestComponent]
    });
    fixture = TestBed.createComponent(ValidationCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
