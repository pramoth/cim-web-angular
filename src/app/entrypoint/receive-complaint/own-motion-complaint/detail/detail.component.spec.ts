import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInDetailComponent } from './detail.component';

describe('WalkInDetailComponent', () => {
  let component: WalkInDetailComponent;
  let fixture: ComponentFixture<WalkInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
