import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingNumberComponent } from './paging-number.component';

describe('PagingNumberComponent', () => {
  let component: PagingNumberComponent;
  let fixture: ComponentFixture<PagingNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
