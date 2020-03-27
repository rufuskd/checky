export interface TaskResource {
  name: string;
  quantity: number;
}

export interface Task {
  name: string;
  requirements: TaskResource[];
}
