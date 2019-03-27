import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeDisplayComponent } from './showtime-display.component';

describe('ShowtimeDisplayComponent', () => {
  let component: ShowtimeDisplayComponent;
  let fixture: ComponentFixture<ShowtimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
