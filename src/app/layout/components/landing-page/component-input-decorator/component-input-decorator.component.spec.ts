import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputDecoratorComponent } from './component-input-decorator.component';

describe('ComponentInputDecoratorComponent', () => {
  let component: ComponentInputDecoratorComponent;
  let fixture: ComponentFixture<ComponentInputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInputDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
