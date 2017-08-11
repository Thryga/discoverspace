import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicfrommarsComponent } from './picfrommars.component';

describe('PicfrommarsComponent', () => {
  let component: PicfrommarsComponent;
  let fixture: ComponentFixture<PicfrommarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicfrommarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicfrommarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
