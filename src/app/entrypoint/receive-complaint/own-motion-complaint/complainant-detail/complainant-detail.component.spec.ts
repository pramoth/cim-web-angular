import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInComplainantDetailComponent } from './complainant-detail.component';

describe('WalkInComplainantDetailComponent', () => {
  let component: WalkInComplainantDetailComponent;
  let fixture: ComponentFixture<WalkInComplainantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInComplainantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInComplainantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
