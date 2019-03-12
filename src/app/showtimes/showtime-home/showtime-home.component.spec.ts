import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeHomeComponent } from './showtime-home.component';

describe('ShowtimeHomeComponent', () => {
  let component: ShowtimeHomeComponent;
  let fixture: ComponentFixture<ShowtimeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
