import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeCinemaComponent } from './showtime-cinema.component';

describe('ShowtimeCinemaComponent', () => {
  let component: ShowtimeCinemaComponent;
  let fixture: ComponentFixture<ShowtimeCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
