import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDemandeComponent } from './validation-demande.component';

describe('ValidationDemandeComponent', () => {
  let component: ValidationDemandeComponent;
  let fixture: ComponentFixture<ValidationDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationDemandeComponent]
    });
    fixture = TestBed.createComponent(ValidationDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
