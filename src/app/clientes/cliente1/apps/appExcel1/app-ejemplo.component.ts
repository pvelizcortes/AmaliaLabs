import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from '../../../../common/components/upload-file/upload-file.component';
import { UtilsExcel } from '../../../../common/functions/utils-excel';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { ChartjsComponent } from '@coreui/angular-chartjs';

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
  imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormLabelDirective, FormControlDirective, BorderDirective, UploadFileComponent, AlertComponent, ChartjsComponent]
})

export class AppEjemploComponent {
  jsonData: any[] = [];
  titulo = "App de Ejemplo 1";
  showUpload = true;
  promedio = 0;
  suma = 0;

  // CHART JS
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Ventas',
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.1)',
      },
    ],
  };
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  // END CHART JS


  constructor(private utilExcel: UtilsExcel) { }
  getJson(datos: any[]) {
    this.jsonData = datos;
    console.log('JSON recibido desde hijo:', this.jsonData);
    this.promedio = this.utilExcel.promediar(this.jsonData, 0, 'columna');
    this.suma = this.utilExcel.sumar(this.jsonData, 0, 'columna');
    this.showUpload = !this.showUpload;
  }

  generateGraph(){

  }
}
