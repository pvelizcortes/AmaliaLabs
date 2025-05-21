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

import {AplicacionesService} from '../../../services/app.service'
import {LoginService} from '../../../services/login.service'
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-aplicaciones',
    templateUrl: './aplicaciones.component.html',
    imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, NgStyle, RouterLink]
})
export class AplicacionesComponent {

  aplicaciones: { nombre: string; ruta: string }[] = [];

  constructor(
    private supabaseService: AplicacionesService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUser().subscribe(async (user) => {
      if (user) {
        const apps = await this.supabaseService.getAplicacionesPorUsuario(user.id);
        this.aplicaciones = apps;
      }
    });
  }
}
