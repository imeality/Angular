import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communitypage3Component } from './communitypage3.component';

describe('Communitypage3Component', () => {
  let component: Communitypage3Component;
  let fixture: ComponentFixture<Communitypage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communitypage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communitypage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
