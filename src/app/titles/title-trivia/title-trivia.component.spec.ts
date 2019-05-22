import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTriviaComponent } from './title-trivia.component';

describe('TitleTriviaComponent', () => {
  let component: TitleTriviaComponent;
  let fixture: ComponentFixture<TitleTriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTriviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
