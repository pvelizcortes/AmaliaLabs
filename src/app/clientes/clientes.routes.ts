
import { Routes } from '@angular/router';

export const clientesRoutes: Routes = [
  {
    path: 'cliente1',
    loadChildren: () =>
      import('./cliente1/cliente1.module').then(m => m.Cliente1Module)
  },
//   {
//     path: 'cliente2',
//     loadChildren: () =>
//       import('./cliente2/cliente2.module').then(m => m.Cliente2Module)
//   },
  // más clientes acá...
];