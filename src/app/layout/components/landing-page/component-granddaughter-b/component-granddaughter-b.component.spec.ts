import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGranddaughterBComponent } from './component-granddaughter-b.component';

describe('ComponentGranddaughterBComponent', () => {
  let component: ComponentGranddaughterBComponent;
  let fixture: ComponentFixture<ComponentGranddaughterBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGranddaughterBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGranddaughterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
