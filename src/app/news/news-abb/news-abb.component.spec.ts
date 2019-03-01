import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAbbComponent } from './news-abb.component';

describe('NewsAbbComponent', () => {
  let component: NewsAbbComponent;
  let fixture: ComponentFixture<NewsAbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
