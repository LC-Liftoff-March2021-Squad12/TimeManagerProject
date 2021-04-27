import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public toDoList: TaskList[];
  public task: [TaskList];
  private description: string;
  private isDone: boolean;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  saveTask() {
    this.description = (<HTMLInputElement>document.getElementById('description')).value;

    this.task = [{ description: this.description, isDone: this.isDone }];

    this.http.post<any>(this.baseUrl + 'to-do-list', this.task).subscribe(result => {
      this.task = result;
    }, error => console.error(error));
  }

  getTask() {
    this.http.get<any>(this.baseUrl + 'to-do-list').subscribe(result => {
      this.task = result;


    }, error => console.error(error));
  }
  
  //addTask() {
    //this.toDoList.push(new TaskList());
  //}

  deleteTask(index: number) {
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  
  }
}

interface TaskList {
  description: string;
  isDone: boolean;
}

