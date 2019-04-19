import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAbbComponent } from './find-abb.component';

describe('FindAbbComponent', () => {
  let component: FindAbbComponent;
  let fixture: ComponentFixture<FindAbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
