import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterInterfaceComponent } from './tester-interface.component';

describe('TesterInterfaceComponent', () => {
  let component: TesterInterfaceComponent;
  let fixture: ComponentFixture<TesterInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
