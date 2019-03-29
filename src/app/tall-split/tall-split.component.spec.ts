import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallSplitComponent } from './tall-split.component';

describe('TallSplitComponent', () => {
  let component: TallSplitComponent;
  let fixture: ComponentFixture<TallSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
