import { Component, OnInit } from '@angular/core';
import { Task, TaskResource } from './task';
import { FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})

export class TaskEntryComponent implements OnInit {

  taskForm = new FormGroup({
    taskName: new FormControl(''),
    reqToAdd: new FormControl(''),
    quantityToAdd: new FormControl(''),
    requirements: new FormArray([]),
  });

  ngOnInit() {

  }

  taskClick()
  {
    console.warn(this.taskForm.value.taskName,this.taskForm.value.requirements,this.taskForm.value.reqToAdd);
  }

  reqClick()
  {
    var newItem = {} as TaskResource;
    newItem.name = this.taskForm.value.reqToAdd;
    newItem.quantity = this.taskForm.value.quantityToAdd;
    (<FormArray>this.taskForm.controls.requirements).push(new RequirementFormGroup(newItem.name,newItem.quantity));
    console.warn(this.taskForm.value.requirements);
  }
}

class RequirementFormGroup extends FormGroup {
  constructor(rn: string, rq: number)
  {
    super({reqName: new FormControl(rn),
            reqQuantity: new FormControl(rq),
          });
  }

}
