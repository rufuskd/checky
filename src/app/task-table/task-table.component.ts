import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TaskListService } from '../tasklist/tasklist.service';
import { Task, TaskResource } from '../classes/task';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-task-table',
  styleUrls: ['task-table.component.css'],
  templateUrl: 'task-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TaskTableComponent {
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  taskArray = [];
  columnsToDisplay = ['name'];
  expandedTask: Task[] = [];

  constructor( private taskListService: TaskListService )
  {
    this.taskListService.getTasks().subscribe(
      (data) => { this.taskArray = data.body; console.warn(data) },
      (error) => console.warn("Failed to populate task table")
    );
  }

  handleDeleteTaskClick(t: Task)
  {
    console.warn("Tried to delete");
    let killindex = this.taskArray.indexOf(t, 0);
    if(killindex > -1){
      this.taskArray.splice(killindex,1);
    }
    this.taskListService.removeFromTaskList(t).subscribe(
      (data) => { console.warn(data) },
      (error) => console.warn("Failed to delete shit")
    );
    this.table.renderRows();
  }

  handleExpandedItemClick()
  {
    console.warn("ASSY THE BUTT DOG!");
  }

  handleTaskClick(t: Task)
  {
    let killindex = this.expandedTask.indexOf(t, 0);
    if(killindex > -1){
      this.expandedTask.splice(killindex,1);
    }
    else
    {
      this.expandedTask.push(t);
    }
  }
}
