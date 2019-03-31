import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTheaterListComponent } from './showtime-theater-list.component';

describe('ShowtimeTheaterInputComponent', () => {
  let component: ShowtimeTheaterListComponent;
  let fixture: ComponentFixture<ShowtimeTheaterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowtimeTheaterListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTheaterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
