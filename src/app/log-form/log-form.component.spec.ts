import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFormComponent } from './log-form.component';

describe('LogFormComponent', () => {
  let component: LogFormComponent;
  let fixture: ComponentFixture<LogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
