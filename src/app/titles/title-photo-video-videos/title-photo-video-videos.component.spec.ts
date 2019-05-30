import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePhotoVideoVideosComponent } from './title-photo-video-videos.component';

describe('TitlePhotoVideoVideosComponent', () => {
  let component: TitlePhotoVideoVideosComponent;
  let fixture: ComponentFixture<TitlePhotoVideoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePhotoVideoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePhotoVideoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
