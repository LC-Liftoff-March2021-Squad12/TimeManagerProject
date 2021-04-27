import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public toDoList: TaskEntry[];
  public task: [TaskEntry];
  private description: string;
  private isDone: boolean;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getTask() {
    this.http.get<any>(this.baseUrl + 'TaskEntry').subscribe(result => {
      this.toDoList = result;
    }, error => console.error(error));
  }

  saveTask() {
    //this.toDoList.push(new this.TaskEntry);
    this.description = (<HTMLInputElement>document.getElementById('description')).value;

    this.task = [{ description: this.description, isDone: this.isDone }];

    this.http.post<any>(this.baseUrl + 'TaskEntry', this.task).subscribe(result => {
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
    this.http.delete<any>(this.baseUrl + 'TaskEntry').subscribe(result => {
      this.task = result;
    }, error => console.error(error));
  }

}

interface TaskEntry {
  description: string;
  isDone: boolean;
}

