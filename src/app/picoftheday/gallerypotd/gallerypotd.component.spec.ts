import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypotdComponent } from './gallerypotd.component';

describe('GallerypotdComponent', () => {
  let component: GallerypotdComponent;
  let fixture: ComponentFixture<GallerypotdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypotdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
