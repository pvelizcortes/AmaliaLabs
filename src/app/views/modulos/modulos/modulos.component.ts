import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
@Component({
    selector: 'app-modulos',
    templateUrl: './modulos.component.html',
    imports: [RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, NgStyle]
})
export class ModulosComponent {
  constructor() {}
 
}
