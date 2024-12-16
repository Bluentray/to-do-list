import { Observable, ObservableArray } from '@nativescript/core';
import { Todo, TodoModel } from '../models/todo.model';

export class TodosViewModel extends Observable {
  private _todos: ObservableArray<Todo>;
  private _newTodoText: string;

  constructor() {
    super();
    this._todos = new ObservableArray<Todo>();
    this._newTodoText = "";
  }

  get todos(): ObservableArray<Todo> {
    return this._todos;
  }

  get newTodoText(): string {
    return this._newTodoText;
  }

  set newTodoText(value: string) {
    if (this._newTodoText !== value) {
      this._newTodoText = value;
      this.notifyPropertyChange('newTodoText', value);
    }
  }

  onAddTodo() {
    if (this._newTodoText.trim()) {
      const todo = new TodoModel(this._newTodoText.trim());
      this._todos.unshift(todo);
      this.newTodoText = ""; // Clear the input
    }
  }

  onToggleComplete(args) {
    const todo = args.object.bindingContext;
    const index = this._todos.indexOf(todo);
    if (index !== -1) {
      todo.completed = !todo.completed;
      this._todos.splice(index, 1, todo);
    }
  }

  onDeleteTodo(args) {
    const todo = args.object.bindingContext;
    const index = this._todos.indexOf(todo);
    if (index !== -1) {
      this._todos.splice(index, 1);
    }
  }
}