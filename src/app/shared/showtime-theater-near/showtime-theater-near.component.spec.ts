import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTheaterNearComponent } from './showtime-theater-near.component';

describe('ShowtimeTheaterNearComponent', () => {
  let component: ShowtimeTheaterNearComponent;
  let fixture: ComponentFixture<ShowtimeTheaterNearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeTheaterNearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTheaterNearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
