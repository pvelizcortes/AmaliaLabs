import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Aplicaciones Page'
    },
    children: [
      {
        path: '',
        redirectTo: 'aplicaciones',
        pathMatch: 'full'
      },
      {
        path: 'aplicaciones',
        loadComponent: () => import('./aplicaciones/aplicaciones.component').then(m => m.AplicacionesComponent),
        data: {
          title: 'Aplicaciones'
        }
      }     
    ]
  }
];
