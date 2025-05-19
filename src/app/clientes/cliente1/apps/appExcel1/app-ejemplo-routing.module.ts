import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEjemploComponent } from './app-ejemplo.component';

const routes: Routes = [
  {
    path: '',
    component: AppEjemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEjemploRoutingModule {}