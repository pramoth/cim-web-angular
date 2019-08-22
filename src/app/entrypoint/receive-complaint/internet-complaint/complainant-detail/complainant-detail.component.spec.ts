import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainantDetailComponent } from './complainant-detail.component';

describe('ComplainantDetailComponent', () => {
  let component: ComplainantDetailComponent;
  let fixture: ComponentFixture<ComplainantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
