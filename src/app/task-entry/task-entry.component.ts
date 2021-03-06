import { Component, OnInit } from '@angular/core';
import { Task, TaskResource } from '../classes/task';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { TaskListService } from '../tasklist/tasklist.service';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})

export class TaskEntryComponent implements OnInit {

  taskForm: FormGroup = new FormGroup({
    taskName: new FormControl(''),
    reqToAdd: new FormControl(''),
    quantityToAdd: new FormControl(''),
    requirements: new FormArray([]),
  });

  reqPointer: FormArray;

  constructor(
    private taskListService: TaskListService
  ){ }

  ngOnInit() {
    this.reqPointer = <FormArray>(this.taskForm.controls.requirements);
  }


  taskClick()
  {
    var newTask: Task = {
      name: this.taskForm.value.taskName,
      requirements: [],
    };
    (<FormArray>this.taskForm.controls.requirements).controls.forEach((t) => {
      var temp: TaskResource  = { name: (<RequirementFormGroup>t).controls.reqName.value, quantity: (<RequirementFormGroup>t).controls.reqQuantity.value };
      newTask.requirements.push(temp);
    });
    this.taskListService.addToTaskList(newTask).subscribe();
    (<FormArray>this.taskForm.controls.requirements).clear();
    (<FormGroup>this.taskForm).reset();
  }

  reqClick()
  {
    var newItem = {} as TaskResource;
    newItem.name = this.taskForm.value.reqToAdd;
    newItem.quantity = this.taskForm.value.quantityToAdd;
    (<FormControl>this.taskForm.controls.reqToAdd).reset();
    (<FormControl>this.taskForm.controls.quantityToAdd).reset();
    (<FormArray>this.taskForm.controls.requirements).push(new RequirementFormGroup(newItem.name,newItem.quantity));
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
