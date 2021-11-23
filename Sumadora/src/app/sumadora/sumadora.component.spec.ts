import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumadoraComponent } from './sumadora.component';

describe('SumadoraComponent', () => {
  let component: SumadoraComponent;
  let fixture: ComponentFixture<SumadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
