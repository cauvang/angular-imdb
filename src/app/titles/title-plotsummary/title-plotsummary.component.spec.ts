import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePlotsummaryComponent } from './title-plotsummary.component';

describe('TitlePlotsummaryComponent', () => {
  let component: TitlePlotsummaryComponent;
  let fixture: ComponentFixture<TitlePlotsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePlotsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePlotsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
