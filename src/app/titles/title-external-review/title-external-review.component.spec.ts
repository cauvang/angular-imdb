import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleExternalReviewComponent } from './title-external-review.component';

describe('TitleExternalReviewComponent', () => {
  let component: TitleExternalReviewComponent;
  let fixture: ComponentFixture<TitleExternalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleExternalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleExternalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
