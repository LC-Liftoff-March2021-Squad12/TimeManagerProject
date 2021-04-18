export class TaskEntry {
  public id: number;
  public description: string = "";
  public isDone: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public toDoList: TaskEntry[] = [];

  addTask() {
    this.toDoList.push(new TaskEntry());
  }

  deleteTask(index: number) {
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }

}
