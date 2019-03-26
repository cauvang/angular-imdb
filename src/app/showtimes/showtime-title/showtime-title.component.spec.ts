import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeTitleComponent } from './showtime-title.component';

describe('ShowtimeTitleComponent', () => {
  let component: ShowtimeTitleComponent;
  let fixture: ComponentFixture<ShowtimeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
