import { Component, OnInit } from '@angular/core';
import { Task, TaskResource } from '../classes/task';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { TaskListService } from '../tasklist/tasklist.service';


@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  taskName = new FormControl('');
  tasks = [];

  constructor( private taskListService: TaskListService ) {
    this.taskListService.getTasks().subscribe(
      (data) => this.tasks = data,
      (error) => console.warn("BALLS"),
      () => console.log(this.tasks)
    );
    console.warn("ASS");
    console.warn(this.tasks);
    //if (this.taskListService.getTasks()[0])
    //{
    //  this.tasks = this.taskListService.getTasks();
    //}
  }

  ngOnInit() {
  }

}
