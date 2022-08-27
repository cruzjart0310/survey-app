import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAnswerComponent } from './creation-answer.component';

describe('CreationAnswerComponent', () => {
  let component: CreationAnswerComponent;
  let fixture: ComponentFixture<CreationAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
