import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNameTextComponent } from './search-name-text.component';

describe('SearchNameTextComponent', () => {
  let component: SearchNameTextComponent;
  let fixture: ComponentFixture<SearchNameTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNameTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNameTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
