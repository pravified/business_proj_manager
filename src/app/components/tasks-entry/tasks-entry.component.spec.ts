import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksEntryComponent } from './tasks-entry.component';

describe('TasksEntryComponent', () => {
  let component: TasksEntryComponent;
  let fixture: ComponentFixture<TasksEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
