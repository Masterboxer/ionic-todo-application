import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'add-todo',
    loadComponent: () =>
      import('./add-todo/add-todo.component').then((m) => m.AddTodoComponent),
  },
  {
    path: 'view-todo',
    loadComponent: () =>
      import('./view-todo/view-todo.component').then(
        (m) => m.ViewTodoComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
