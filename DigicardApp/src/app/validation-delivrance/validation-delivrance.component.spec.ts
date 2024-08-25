import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDelivranceComponent } from './validation-delivrance.component';

describe('ValidationDelivranceComponent', () => {
  let component: ValidationDelivranceComponent;
  let fixture: ComponentFixture<ValidationDelivranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationDelivranceComponent]
    });
    fixture = TestBed.createComponent(ValidationDelivranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
