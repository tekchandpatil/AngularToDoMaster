import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<string> = [];
  taskSuccessful: Array<string> = [];

  currTaskList = new Subject<Array<string>>();
  taskSuccessFulList = new Subject<Array<string>>();

  constructor() { }

  addNewTask(newTask: string) {
    if (newTask.length > 0) {
      this.tasks.push(newTask);
      this.currTaskList.next(this.tasks);
    }
  }

  removeTask(taskToRemove: string) {
    this.tasks = this.tasks.filter( tasks => tasks !== taskToRemove);
    this.currTaskList.next(this.tasks);
  }

  doneTask(task: string) {
    this.removeTask(task);
    this.taskSuccessful.push(task);
    this.taskSuccessFulList.next(this.taskSuccessful);
  }

  getObsTaskCurrent(): Observable<Array<string>> {
    return this.currTaskList.asObservable();
  }

  getObsTaskSuccessful(): Observable<Array<string>> {
    return this.taskSuccessFulList.asObservable();
  }

}
