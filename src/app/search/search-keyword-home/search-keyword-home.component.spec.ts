import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKeywordHomeComponent } from './search-keyword-home.component';

describe('SearchKeywordHomeComponent', () => {
  let component: SearchKeywordHomeComponent;
  let fixture: ComponentFixture<SearchKeywordHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchKeywordHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKeywordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
