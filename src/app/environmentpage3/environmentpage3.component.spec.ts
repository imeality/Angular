import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Environmentpage3Component } from './environmentpage3.component';

describe('Environmentpage3Component', () => {
  let component: Environmentpage3Component;
  let fixture: ComponentFixture<Environmentpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Environmentpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Environmentpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
