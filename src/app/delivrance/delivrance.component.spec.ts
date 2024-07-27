import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivranceComponent } from './delivrance.component';

describe('DelivranceComponent', () => {
  let component: DelivranceComponent;
  let fixture: ComponentFixture<DelivranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelivranceComponent]
    });
    fixture = TestBed.createComponent(DelivranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
