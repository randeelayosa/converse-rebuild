import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtrHalfComponent } from './qtr-half.component';

describe('QtrHalfComponent', () => {
  let component: QtrHalfComponent;
  let fixture: ComponentFixture<QtrHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtrHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtrHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
