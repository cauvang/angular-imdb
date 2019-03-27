import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTheaterInputComponent } from './showtime-theater-input.component';

describe('ShowtimeTheaterInputComponent', () => {
  let component: ShowtimeTheaterInputComponent;
  let fixture: ComponentFixture<ShowtimeTheaterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeTheaterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTheaterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
