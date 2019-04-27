import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKeywordRoutingComponent } from './search-keyword-routing.component';

describe('SearchKeywordRoutingComponent', () => {
  let component: SearchKeywordRoutingComponent;
  let fixture: ComponentFixture<SearchKeywordRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchKeywordRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchKeywordRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
