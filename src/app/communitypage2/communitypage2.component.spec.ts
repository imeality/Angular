import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communitypage2Component } from './communitypage2.component';

describe('Communitypage2Component', () => {
  let component: Communitypage2Component;
  let fixture: ComponentFixture<Communitypage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communitypage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communitypage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
