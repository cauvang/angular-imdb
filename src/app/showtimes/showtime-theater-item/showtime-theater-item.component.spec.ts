import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTheaterItemComponent } from './showtime-theater-item.component';

describe('ShowtimeTheaterItemComponent', () => {
  let component: ShowtimeTheaterItemComponent;
  let fixture: ComponentFixture<ShowtimeTheaterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeTheaterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTheaterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
