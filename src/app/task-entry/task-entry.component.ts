import { Component, OnInit } from '@angular/core';
import { Task, TaskResource } from '../task';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  requirements = [];
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    reqToAdd: new FormControl(''),
    quantityToAdd: new FormControl(''),
  });

  ngOnInit() {

  }

  taskClick()
  {
    console.warn(this.taskForm.value.taskName,this.requirements,this.taskForm.value.reqToAdd);
  }

  reqClick()
  {
    var newItem = {} as TaskResource;
    newItem.name = this.taskForm.value.reqToAdd;
    newItem.quantity = this.taskForm.value.quantityToAdd;
    this.requirements.push(newItem);
    console.warn(this.taskForm.value.reqToAdd);
  }
}
