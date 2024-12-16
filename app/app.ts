import { Application } from '@nativescript/core';
import { initializeStore } from './store/store';

// Initialize the store before running the application
initializeStore();

Application.run({ moduleName: 'app-root' });