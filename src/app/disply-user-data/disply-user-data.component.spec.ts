import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplyUserDataComponent } from './disply-user-data.component';

describe('DisplyUserDataComponent', () => {
  let component: DisplyUserDataComponent;
  let fixture: ComponentFixture<DisplyUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplyUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplyUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
