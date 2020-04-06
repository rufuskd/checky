import { Injectable } from '@angular/core';
import { Task, TaskResource } from '../classes/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//Change this from just storing it's own shit
//to connecting to a wsgi to pass in JSON
export class TaskListService {

  private taskList: Task[] = []
  constructor( private httpClient: HttpClient) { }

  addToTaskList(t)
  {
    this.taskList.push(t);
    console.warn("ASS!");
    alert(this.httpClient);
    //this.httpClient.get("http://10.88.0.102:8000").subscribe();
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
