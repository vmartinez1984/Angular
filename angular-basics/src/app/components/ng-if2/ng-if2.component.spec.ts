import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIf2Component } from './ng-if2.component';

describe('NgIf2Component', () => {
  let component: NgIf2Component;
  let fixture: ComponentFixture<NgIf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
