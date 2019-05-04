import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  taskList: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getObsTaskCurrent().subscribe((tasks: string[]) => {
        this.taskList = tasks;
      });

  }

  ngOnInit() {
  }

  removeTask(task: string) {
    this.tasksService.removeTask(task);
  }

  doneTask(task: string) {
    this.tasksService.doneTask(task);
  }

}
