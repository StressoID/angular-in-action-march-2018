import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansivePanelComponent } from './expansive-panel.component';

describe('ExpansivePanelComponent', () => {
  let component: ExpansivePanelComponent;
  let fixture: ComponentFixture<ExpansivePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansivePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansivePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
