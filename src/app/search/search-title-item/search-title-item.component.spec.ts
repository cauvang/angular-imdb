import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleItemComponent } from './search-title-item.component';

describe('TitleItemComponent', () => {
  let component: SearchTitleItemComponent;
  let fixture: ComponentFixture<SearchTitleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTitleItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
