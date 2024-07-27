import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDemandeComponent } from './suivi-demande.component';

describe('SuiviDemandeComponent', () => {
  let component: SuiviDemandeComponent;
  let fixture: ComponentFixture<SuiviDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviDemandeComponent]
    });
    fixture = TestBed.createComponent(SuiviDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
