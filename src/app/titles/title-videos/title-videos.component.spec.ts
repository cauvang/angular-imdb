import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleVideosComponent } from './title-videos.component';

describe('TitleVideosComponent', () => {
  let component: TitleVideosComponent;
  let fixture: ComponentFixture<TitleVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
