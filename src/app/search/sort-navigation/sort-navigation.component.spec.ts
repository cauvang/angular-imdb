import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNavigationComponent } from './sort-navigation.component';

describe('SortComponent', () => {
  let component: SortNavigationComponent;
  let fixture: ComponentFixture<SortNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortNavigationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
