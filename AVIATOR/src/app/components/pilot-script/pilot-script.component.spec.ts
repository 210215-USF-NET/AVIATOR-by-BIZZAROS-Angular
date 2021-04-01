import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotScriptComponent } from './pilot-script.component';

describe('PilotScriptComponent', () => {
  let component: PilotScriptComponent;
  let fixture: ComponentFixture<PilotScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
