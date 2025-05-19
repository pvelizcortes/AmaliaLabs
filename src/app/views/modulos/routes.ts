import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Moudlos Page'
    },
    children: [
      {
        path: '',
        redirectTo: 'modulos',
        pathMatch: 'full'
      },
      {
        path: 'modulos',
        loadComponent: () => import('./modulos/modulos.component').then(m => m.ModulosComponent),
        data: {
          title: 'Modulos'
        }
      }     
    ]
  }
];
