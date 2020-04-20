import { Injectable } from '@angular/core';
import { Task, TaskResource } from '../classes/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//Change this from just storing it's own shit
//to connecting to a wsgi to pass in JSON
export class TaskListService {

  constructor( private httpClient: HttpClient) { }

  removeFromTaskList(t)
  {
    return this.httpClient.delete<any>("http://10.88.0.101/submitdata?oid="+t._id.$oid);
  }

  addToTaskList(t)
  {
    return this.httpClient.post<any>("http://10.88.0.101/submitdata", JSON.stringify(t));
  }

  getTasks()
  {
    return this.httpClient.get<any>("http://10.88.0.101/submitdata", {observe: "response"});
  }
}
