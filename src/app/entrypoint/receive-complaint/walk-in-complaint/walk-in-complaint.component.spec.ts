import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInComplaintComponent } from './walk-in-complaint.component';

describe('WalkInComplaintComponent', () => {
  let component: WalkInComplaintComponent;
  let fixture: ComponentFixture<WalkInComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
