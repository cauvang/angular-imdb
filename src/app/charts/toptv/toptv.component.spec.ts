import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptvComponent } from './toptv.component';

describe('ToptvComponent', () => {
  let component: ToptvComponent;
  let fixture: ComponentFixture<ToptvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
