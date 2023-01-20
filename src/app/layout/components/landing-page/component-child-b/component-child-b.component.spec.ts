import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildBComponent } from './component-child-b.component';

describe('ComponentChildBComponent', () => {
  let component: ComponentChildBComponent;
  let fixture: ComponentFixture<ComponentChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
