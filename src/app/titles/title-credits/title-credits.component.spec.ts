import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCreditsComponent } from './title-credits.component';

describe('TitleCreditsComponent', () => {
  let component: TitleCreditsComponent;
  let fixture: ComponentFixture<TitleCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
