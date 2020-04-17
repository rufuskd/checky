export interface TaskResource {
  name: string;
  quantity: number;
}

export interface Task {
  _id?: string;
  name: string;
  requirements: TaskResource[];
}
