import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuestionComponent } from './home-question.component';

describe('HomeQuestionComponent', () => {
  let component: HomeQuestionComponent;
  let fixture: ComponentFixture<HomeQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
