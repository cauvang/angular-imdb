import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameMediaIndexComponent } from './name-media-index.component';

describe('NameMediaIndexComponent', () => {
  let component: NameMediaIndexComponent;
  let fixture: ComponentFixture<NameMediaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameMediaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameMediaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
