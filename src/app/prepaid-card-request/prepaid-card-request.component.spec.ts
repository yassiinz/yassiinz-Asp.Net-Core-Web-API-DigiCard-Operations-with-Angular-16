import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidCardRequestComponent } from './prepaid-card-request.component';

describe('PrepaidCardRequestComponent', () => {
  let component: PrepaidCardRequestComponent;
  let fixture: ComponentFixture<PrepaidCardRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepaidCardRequestComponent]
    });
    fixture = TestBed.createComponent(PrepaidCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
