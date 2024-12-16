import { NavigatedData, Page } from '@nativescript/core';
import { TodosViewModel } from './todos-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    if (!page.bindingContext) {
        page.bindingContext = new TodosViewModel();
    }
}