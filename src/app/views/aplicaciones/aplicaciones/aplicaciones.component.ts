import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  ListGroupDirective,
  ListGroupItemDirective  
} from '@coreui/angular';

import { AplicacionesService } from '../../../services/app.service'
import { LoginService } from '../../../services/login.service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss'],
  imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, NgStyle, RouterLink, ListGroupDirective, ListGroupItemDirective, IconDirective, FormsModule]
})
export class AplicacionesComponent {

  aplicaciones: { nombre: string; ruta: string, descripcion: string, fecha_creacion: Date }[] = [];
  appsFiltradas = [...this.aplicaciones];
  filtro: string = '';

  constructor(
    private supabaseService: AplicacionesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(async (user) => {
      if (user) {
        const apps = await this.supabaseService.getAplicacionesPorUsuario(user.id);
        this.aplicaciones = apps;
        this.appsFiltradas = [...this.aplicaciones];
      }
    });
  }

  filtrarAplicaciones() {
    const term = this.filtro.toLowerCase();
    this.appsFiltradas = this.aplicaciones.filter(app =>
      app.nombre.toLowerCase().includes(term) || app.descripcion.toLowerCase().includes(term)
    );
  }
}
