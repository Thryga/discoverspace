import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypfmComponent } from './gallerypfm.component';

describe('GallerypfmComponent', () => {
  let component: GallerypfmComponent;
  let fixture: ComponentFixture<GallerypfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
