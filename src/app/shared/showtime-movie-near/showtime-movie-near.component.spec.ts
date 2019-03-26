import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeMovieNearComponent } from './showtime-movie-near.component';

describe('ShowtimeMovieNearComponent', () => {
  let component: ShowtimeMovieNearComponent;
  let fixture: ComponentFixture<ShowtimeMovieNearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeMovieNearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeMovieNearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
