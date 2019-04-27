import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleTextComponent } from './search-title-text.component';

describe('SearchTitleTextComponent', () => {
  let component: SearchTitleTextComponent;
  let fixture: ComponentFixture<SearchTitleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
