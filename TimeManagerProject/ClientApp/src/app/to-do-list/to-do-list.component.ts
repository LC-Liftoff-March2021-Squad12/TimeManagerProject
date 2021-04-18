import { Task } from '../to-do-list/task.js';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  public tasks: TaskList[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<TaskList[]>(baseUrl + 'to-do-list').subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));



    http.put<TaskList[]>(baseUrl + 'to-do-list').subscribe(result => {
      this.tasks.push(new Task()) = result;
    }, error => console.error(error));

    http.delete<TaskList[]>(baseUrl + 'to-do-list').subscribe(result => {
      this.tasks.splice(Task) = result;
    }, error => console.error(error));

    http.post<TaskList[]>(baseUrl + 'to-do-list').subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));

  }

  ngOnInit() {
  }

  public toDoList: Task[] = [];

  addTask() {
    this.toDoList.push(new Task());
  }

  deleteTask(index: number) {
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }

}

interface TaskList {
  Id: number;
  Description: string;
  IsDone: boolean;
  UserId: string;
}




