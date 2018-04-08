import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCatComponent } from './test-cat.component';

describe('TestCatComponent', () => {
  let component: TestCatComponent;
  let fixture: ComponentFixture<TestCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
