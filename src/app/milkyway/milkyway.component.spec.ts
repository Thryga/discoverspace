import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkywayComponent } from './milkyway.component';

describe('MilkywayComponent', () => {
  let component: MilkywayComponent;
  let fixture: ComponentFixture<MilkywayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkywayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkywayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
