import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public toDoList: TaskList[];
  public task: TaskList;
  //private user: string;
  private description: string;
  private isDone: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getTask() {
    this.http.get<any>(this.baseUrl + 'TaskLists').subscribe(result => {
      this.toDoList = result;
    }, error => console.error(error));
  }

  saveTask() {
    //this.toDoList.push(new this.TaskEntry);
    this.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.isDone = "false";
    //this.user = "e53a3145 - ea27 - 4e82 - b1e7 - c68fb9fd33fc";

    this.task = { description: this.description, isDone: this.isDone };
    
    this.http.post<any>(this.baseUrl + 'TaskLists', this.task).subscribe(result => {
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
    this.http.delete<any>(this.baseUrl + 'TaskLists').subscribe(result => {
      this.task = result;
    }, error => console.error(error));
  }

}

interface TaskList {
  description: string;
  isDone: string;
  //user: string;
}

