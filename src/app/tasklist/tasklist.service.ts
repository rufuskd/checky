import { Injectable } from '@angular/core';
import { Task, TaskResource } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  private taskList: Task[] = []
  constructor() { }

  addToTaskList(t)
  {
    this.taskList.push(t);
  }

  getTasks()
  {
    return this.taskList;
  }

  clearTaskList()
  {
    this.taskList.length = 0;
  }
}
