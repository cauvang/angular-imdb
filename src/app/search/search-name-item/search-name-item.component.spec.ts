import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNameItemComponent } from './search-name-item.component';

describe('SearchItemNameComponent', () => {
  let component: SearchNameItemComponent;
  let fixture: ComponentFixture<SearchNameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNameItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
