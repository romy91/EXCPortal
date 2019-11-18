import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsDetailsComponent } from './refunds-details.component';

describe('RefundsDetailsComponent', () => {
  let component: RefundsDetailsComponent;
  let fixture: ComponentFixture<RefundsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
