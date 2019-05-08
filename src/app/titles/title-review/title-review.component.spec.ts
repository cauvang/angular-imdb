import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleReviewComponent } from './title-review.component';

describe('TitleReviewComponent', () => {
  let component: TitleReviewComponent;
  let fixture: ComponentFixture<TitleReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
