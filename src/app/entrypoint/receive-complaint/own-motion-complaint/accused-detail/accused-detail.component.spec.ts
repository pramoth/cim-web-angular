import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInAccusedDetailComponent } from './accused-detail.component';

describe('WalkInAccusedDetailComponent', () => {
  let component: WalkInAccusedDetailComponent;
  let fixture: ComponentFixture<WalkInAccusedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInAccusedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInAccusedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
