import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCriticReviewComponent } from './title-critic-review.component';

describe('TitleCriticReviewComponent', () => {
  let component: TitleCriticReviewComponent;
  let fixture: ComponentFixture<TitleCriticReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCriticReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCriticReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
