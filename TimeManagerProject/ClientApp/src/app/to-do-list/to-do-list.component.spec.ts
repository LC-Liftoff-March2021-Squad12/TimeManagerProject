import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from './Task';

import { ToDoListComponent } from './to-do-list.component';

describe('To-Do-ListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('To-do List');
  }));

  it('should create a task list, then increments by 1 when clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('button');
    expect(countElement.textContent).toEqual('1');
    fixture.detectChanges();
  }));

  it('should create an instance', async(() => {
    const task = fixture.nativeElement.querySelector('description').textContent;
    expect(new Task()).toBeTruthy();
  }));

});
