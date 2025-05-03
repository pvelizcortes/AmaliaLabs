import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Blank Page'
    },
    children: [
      {
        path: '',
        redirectTo: 'blank',
        pathMatch: 'full'
      },
      {
        path: 'blank',
        loadComponent: () => import('./blank/blank.component').then(m => m.BlankComponent),
        data: {
          title: 'Blank Page'
        }
      }     
    ]
  }
];

