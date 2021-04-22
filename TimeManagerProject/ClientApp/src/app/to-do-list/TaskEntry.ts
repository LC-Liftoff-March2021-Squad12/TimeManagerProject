export class TaskEntry {
  public id: number;
  public description: string = "";
  public isDone: boolean = false;
  public userId: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public toDoList: TaskEntry[] = [];
  public completed: TaskEntry[] = [];

  addTask() {
    this.toDoList.push(new TaskEntry());
  }

  deleteTask(index: number) {
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }

  completedTask(index: number, boolean: false) {
    if (index > -1 && this.isDone == true) {
      this.toDoList.pop();
    }
  }

}
