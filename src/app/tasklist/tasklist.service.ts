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

  addToTaskList(t: Task)
  {
    this.httpClient.request('POST', '10.88.0.102:8000');
    this.taskList.push(t);
  }

  getTasks()
  {
    this.httpClient.request('GET', '10.88.0.102:8000');
    return this.taskList;
  }

  clearTaskList()
  {
    this.httpClient.request('DELETE', '10.88.0.102:8000');
    this.taskList.length = 0;
  }
}
