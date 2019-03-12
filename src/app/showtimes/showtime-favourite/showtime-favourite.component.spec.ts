import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeFavouriteComponent } from './showtime-favourite.component';

describe('ShowtimeFavouriteComponent', () => {
  let component: ShowtimeFavouriteComponent;
  let fixture: ComponentFixture<ShowtimeFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
