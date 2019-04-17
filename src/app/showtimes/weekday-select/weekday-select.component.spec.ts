import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaySelectComponent } from './weekday-select.component';

describe('WeekdaySelectComponent', () => {
  let component: WeekdaySelectComponent;
  let fixture: ComponentFixture<WeekdaySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdaySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
