import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDisplayComponent } from './string-display.component';

describe('StringDisplayComponent', () => {
  let component: StringDisplayComponent;
  let fixture: ComponentFixture<StringDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
