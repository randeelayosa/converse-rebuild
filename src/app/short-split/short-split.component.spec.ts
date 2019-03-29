import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSplitComponent } from './short-split.component';

describe('ShortSplitComponent', () => {
  let component: ShortSplitComponent;
  let fixture: ComponentFixture<ShortSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
