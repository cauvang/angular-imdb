import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleGoofsComponent } from './title-goofs.component';

describe('TitleGoofsComponent', () => {
  let component: TitleGoofsComponent;
  let fixture: ComponentFixture<TitleGoofsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleGoofsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleGoofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
