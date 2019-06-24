import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameHomepageComponent } from './name-homepage.component';

describe('NameHomepageComponent', () => {
  let component: NameHomepageComponent;
  let fixture: ComponentFixture<NameHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
