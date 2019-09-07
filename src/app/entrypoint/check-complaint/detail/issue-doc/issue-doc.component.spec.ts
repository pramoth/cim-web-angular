import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDocComponent } from './issue-doc.component';

describe('IssueDocComponent', () => {
  let component: IssueDocComponent;
  let fixture: ComponentFixture<IssueDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
