import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGranddaughterAComponent } from './component-granddaughter-a.component';

describe('ComponentGranddaughterAComponent', () => {
  let component: ComponentGranddaughterAComponent;
  let fixture: ComponentFixture<ComponentGranddaughterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGranddaughterAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGranddaughterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
