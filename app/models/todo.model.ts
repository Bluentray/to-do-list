export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export class TodoModel {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;

  constructor(text: string) {
    this.id = Date.now().toString();
    this.text = text;
    this.completed = false;
    this.createdAt = new Date();
  }
}