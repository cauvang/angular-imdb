import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesHomeComponent } from './titles-home.component';

describe('TitlesHomeComponent', () => {
  let component: TitlesHomeComponent;
  let fixture: ComponentFixture<TitlesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
