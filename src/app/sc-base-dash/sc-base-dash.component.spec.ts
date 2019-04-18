import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScBaseDashComponent } from './sc-base-dash.component';

describe('ScBaseDashComponent', () => {
  let component: ScBaseDashComponent;
  let fixture: ComponentFixture<ScBaseDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScBaseDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScBaseDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
