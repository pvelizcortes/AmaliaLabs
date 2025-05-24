import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from '../../../../common/components/upload-file/upload-file.component'

import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective,
  FormLabelDirective,
  BorderDirective,
  AlertComponent
} from '@coreui/angular';
@Component({
  standalone: true,
  selector: 'app-ejemplo',
  templateUrl: './app-ejemplo.component.html',
  styleUrls: ['./app-ejemplo.component.scss'],
  imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormLabelDirective, FormControlDirective, BorderDirective, UploadFileComponent, AlertComponent]
})

export class AppEjemploComponent {
  jsonData: any[] = [];
  titulo = "App de Ejemplo 1";

  constructor() { }

  getJson(datos: any[]) {
    this.jsonData = datos;
    console.log('JSON recibido desde hijo:', this.jsonData);
  }
}