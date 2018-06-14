import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerResponseComponent } from './server-response.component';

describe('ServerResponseComponent', () => {
  let component: ServerResponseComponent;
  let fixture: ComponentFixture<ServerResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
