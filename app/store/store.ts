import { Observable } from '@nativescript/core';
import { Todo } from '../models/todo.model';

class Store extends Observable {
    private static instance: Store;
    private _todos: Array<Todo> = [];

    static getInstance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }

    get todos(): Array<Todo> {
        return this._todos;
    }

    addTodo(todo: Todo) {
        this._todos.unshift(todo);
        this.notifyPropertyChange('todos', this._todos);
    }

    toggleTodo(id: string) {
        const todo = this._todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.notifyPropertyChange('todos', this._todos);
        }
    }

    deleteTodo(id: string) {
        this._todos = this._todos.filter(t => t.id !== id);
        this.notifyPropertyChange('todos', this._todos);
    }
}

export const store = Store.getInstance();

export function initializeStore() {
    // Initialize with some sample todos
    const store = Store.getInstance();
    if (store.todos.length === 0) {
        store.addTodo({
            id: '1',
            text: 'Welcome to Todo App!',
            completed: false,
            createdAt: new Date()
        });
    }
}