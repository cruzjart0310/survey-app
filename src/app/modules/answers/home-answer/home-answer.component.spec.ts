import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnswerComponent } from './home-answer.component';

describe('HomeAnswerComponent', () => {
  let component: HomeAnswerComponent;
  let fixture: ComponentFixture<HomeAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
