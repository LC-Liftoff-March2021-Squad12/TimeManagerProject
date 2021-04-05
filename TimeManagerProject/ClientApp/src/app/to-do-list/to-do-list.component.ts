import { Task } from '../to-do-list/task.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit{

  constructor() { }

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
