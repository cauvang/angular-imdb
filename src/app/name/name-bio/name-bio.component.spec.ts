import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBioComponent } from './name-bio.component';

describe('NameBioComponent', () => {
  let component: NameBioComponent;
  let fixture: ComponentFixture<NameBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
