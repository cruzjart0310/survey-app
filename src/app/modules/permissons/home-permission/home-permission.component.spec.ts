import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePermissionComponent } from './home-permission.component';

describe('HomePermissionComponent', () => {
  let component: HomePermissionComponent;
  let fixture: ComponentFixture<HomePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
