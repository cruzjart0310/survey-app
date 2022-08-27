import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAssingComponent } from './survey-assing.component';

describe('SurveyAssingComponent', () => {
  let component: SurveyAssingComponent;
  let fixture: ComponentFixture<SurveyAssingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAssingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAssingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
