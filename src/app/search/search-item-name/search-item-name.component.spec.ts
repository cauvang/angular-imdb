import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemNameComponent } from './search-item-name.component';

describe('SearchItemNameComponent', () => {
  let component: SearchItemNameComponent;
  let fixture: ComponentFixture<SearchItemNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
