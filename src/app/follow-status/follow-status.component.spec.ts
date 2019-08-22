import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowStatusComponent } from './follow-status.component';

describe('FollowStatusComponent', () => {
  let component: FollowStatusComponent;
  let fixture: ComponentFixture<FollowStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
