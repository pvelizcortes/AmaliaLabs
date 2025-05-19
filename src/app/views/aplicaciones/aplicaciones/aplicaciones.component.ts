import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { Router } from '@angular/router';
@Component({
    selector: 'app-aplicaciones',
    templateUrl: './aplicaciones.component.html',
    imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, NgStyle]
})
export class AplicacionesComponent {

  clienteId = 'cliente1'; // o lo recibís dinámicamente

  // Ejemplo de Apps
  apps = [
    { nombre: 'App Ejemplo', ruta: 'app-ejemplo' },
    { nombre: 'App Ventas', ruta: 'app-ventas' },
    { nombre: 'App Inventario', ruta: 'app-inventario' }
  ];

  constructor(private router: Router) {}
 
  navegarApp(appRuta: string) {
    this.router.navigate([this.clienteId, appRuta]);
  }
}
