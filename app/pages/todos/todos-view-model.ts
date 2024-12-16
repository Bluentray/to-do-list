import { Observable } from '@nativescript/core';
import { Todo, TodoModel } from '../../models/todo.model';
import { store } from '../../store/store';

export class TodosViewModel extends Observable {
    private _newTodoText: string = '';

    constructor() {
        super();
        this.updateTodos();
    }

    get todos(): Array<Todo> {
        return store.todos;
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
            store.addTodo(todo);
            this.newTodoText = '';
            this.updateTodos();
        }
    }

    onToggleTodo(id: string) {
        store.toggleTodo(id);
        this.updateTodos();
    }

    onDeleteTodo(id: string) {
        store.deleteTodo(id);
        this.updateTodos();
    }

    private updateTodos() {
        this.notifyPropertyChange('todos', this.todos);
    }
}