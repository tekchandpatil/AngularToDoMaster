import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  taskSuccessful: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getObsTaskSuccessful().subscribe( (tasks: string[]) => {
      this.taskSuccessful = tasks;
    });
   }

  ngOnInit() {
  }

}
