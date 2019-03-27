import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Environmentpage2Component } from './environmentpage2.component';

describe('Environmentpage2Component', () => {
  let component: Environmentpage2Component;
  let fixture: ComponentFixture<Environmentpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Environmentpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Environmentpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
