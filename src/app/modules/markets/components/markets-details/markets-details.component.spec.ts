import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsDetailsComponent } from './markets-details.component';

describe('MarketsDetailsComponent', () => {
  let component: MarketsDetailsComponent;
  let fixture: ComponentFixture<MarketsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
