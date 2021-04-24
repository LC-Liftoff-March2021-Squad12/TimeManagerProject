import { TaskEntry } from '../to-do-list/taskentry.js';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  public tasks: TaskList[];
  private Description: string;
  private IsDone: boolean;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {  
  }

  ngOnInit() {
  }

  public toDoList: TaskEntry[] = [];
  public completed: TaskEntry[] = [];
  public isDone: boolean;

  addTask() {
    this.http.get<TaskList[]>(this.baseUrl + 'to-do-list').subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));

    this.http.put<TaskList[]>(this.baseUrl + 'to-do-list', this.addTask).subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));
    this.toDoList.push(new TaskEntry());
  }

  deleteTask(index: number) {
    this.http.delete<TaskList[]>(this.baseUrl + 'to-do-list').subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }

  completedTask(index: number, boolean: false) {
    this.http.post<TaskList[]>(this.baseUrl + 'to-do-list', this.completedTask).subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));

    if (index > -1 && this.isDone == true) {
      this.toDoList.pop();
    }
  }
  
}

interface TaskList {
  //Id: number;
  Description: string;
  IsDone: boolean;
  //UserId: string;
}




