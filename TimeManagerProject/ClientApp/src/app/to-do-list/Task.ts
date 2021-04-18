export class Task {
  public id: number;
  public description: string = "";
  public completed: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
