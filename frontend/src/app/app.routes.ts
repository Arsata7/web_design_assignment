import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./web-design-assignment/web-design-assignment.module').then(m => m.WebDesignAssignmentModule)
  }
];
