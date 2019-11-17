import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsAddComponent } from './refunds-add.component';

describe('RefundsAddComponent', () => {
  let component: RefundsAddComponent;
  let fixture: ComponentFixture<RefundsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
