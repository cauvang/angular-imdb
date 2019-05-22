import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleReleaseinfoComponent } from './title-releaseinfo.component';

describe('TitleReleaseinfoComponent', () => {
  let component: TitleReleaseinfoComponent;
  let fixture: ComponentFixture<TitleReleaseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleReleaseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleReleaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
