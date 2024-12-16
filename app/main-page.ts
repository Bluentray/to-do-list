import { EventData, Page } from '@nativescript/core';
import { TodosViewModel } from './view-models/todos-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const vm = new TodosViewModel();
  page.bindingContext = vm;
}

export function onAddTodo(args: EventData) {
  const vm = (<Page>args.object.page).bindingContext as TodosViewModel;
  vm.onAddTodo();
}

export function onToggleComplete(args: EventData) {
  const vm = (<Page>args.object.page).bindingContext as TodosViewModel;
  vm.onToggleComplete(args);
}

export function onDeleteTodo(args: EventData) {
  const vm = (<Page>args.object.page).bindingContext as TodosViewModel;
  vm.onDeleteTodo(args);
}