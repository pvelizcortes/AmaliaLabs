// src/app/clients/cliente1/cliente1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app-ejemplo',
    loadChildren: () =>
      import('./apps/appExcel1/app-ejemplo.module').then(m => m.AppEjemploModule)
  },
  // podés agregar más rutas de apps acá
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cliente1RoutingModule {}