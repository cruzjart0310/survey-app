import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSurveyComponent } from './index-survey.component';

describe('IndexSurveyComponent', () => {
  let component: IndexSurveyComponent;
  let fixture: ComponentFixture<IndexSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
