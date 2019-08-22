import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccusedDetailComponent } from './accused-detail.component';

describe('AccusedDetailComponent', () => {
  let component: AccusedDetailComponent;
  let fixture: ComponentFixture<AccusedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccusedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccusedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
