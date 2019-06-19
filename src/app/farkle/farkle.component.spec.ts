import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarkleComponent } from './farkle.component';

describe('FarkleComponent', () => {
  let component: FarkleComponent;
  let fixture: ComponentFixture<FarkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
