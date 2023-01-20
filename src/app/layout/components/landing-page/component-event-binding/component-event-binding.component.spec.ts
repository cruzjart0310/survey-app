import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEventBindingComponent } from './component-event-binding.component';

describe('ComponentEventBindingComponent', () => {
  let component: ComponentEventBindingComponent;
  let fixture: ComponentFixture<ComponentEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
