import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentViewsComponent } from './recent-views.component';

describe('ViewsComponent', () => {
  let component: RecentViewsComponent;
  let fixture: ComponentFixture<RecentViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentViewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
