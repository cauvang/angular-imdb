import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTopRatedComponent } from './chart-top-rated.component';

describe('ChartTopRatedComponent', () => {
  let component: ChartTopRatedComponent;
  let fixture: ComponentFixture<ChartTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
