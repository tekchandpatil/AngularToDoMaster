import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) { }

  sendNewTask() {
    this.tasksService.addNewTask(this.newTask);
    this.newTask = '';
  }

  ngOnInit() {
  }

}
