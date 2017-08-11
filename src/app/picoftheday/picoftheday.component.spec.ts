import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicofthedayComponent } from './picoftheday.component';

describe('PicofthedayComponent', () => {
  let component: PicofthedayComponent;
  let fixture: ComponentFixture<PicofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
