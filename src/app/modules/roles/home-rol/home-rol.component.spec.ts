import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRolComponent } from './home-rol.component';

describe('HomeRolComponent', () => {
  let component: HomeRolComponent;
  let fixture: ComponentFixture<HomeRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
