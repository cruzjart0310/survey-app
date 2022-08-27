import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveSurveryComponent } from './solve-survery.component';

describe('SolveSurveryComponent', () => {
  let component: SolveSurveryComponent;
  let fixture: ComponentFixture<SolveSurveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveSurveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveSurveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
