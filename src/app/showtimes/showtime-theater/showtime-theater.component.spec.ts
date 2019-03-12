import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTheaterComponent } from './showtime-theater.component';

describe('ShowtimeTheaterComponent', () => {
  let component: ShowtimeTheaterComponent;
  let fixture: ComponentFixture<ShowtimeTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
