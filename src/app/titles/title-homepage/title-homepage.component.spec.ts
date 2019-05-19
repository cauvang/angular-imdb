import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHomepageComponent } from './title-homepage.component';

describe('TitleHomepageComponent', () => {
  let component: TitleHomepageComponent;
  let fixture: ComponentFixture<TitleHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
