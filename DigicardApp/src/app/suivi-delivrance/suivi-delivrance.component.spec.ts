import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDelivranceComponent } from './suivi-delivrance.component';

describe('SuiviDelivranceComponent', () => {
  let component: SuiviDelivranceComponent;
  let fixture: ComponentFixture<SuiviDelivranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviDelivranceComponent]
    });
    fixture = TestBed.createComponent(SuiviDelivranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
