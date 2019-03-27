import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Environmentpage4Component } from './environmentpage4.component';

describe('Environmentpage4Component', () => {
  let component: Environmentpage4Component;
  let fixture: ComponentFixture<Environmentpage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Environmentpage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Environmentpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
