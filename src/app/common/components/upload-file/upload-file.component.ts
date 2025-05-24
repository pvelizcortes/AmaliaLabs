import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective, 
  FormLabelDirective,
  BorderDirective
} from '@coreui/angular';
@Component({
  standalone: true,
  selector: 'upload-file',
  templateUrl: './upload-file.html',
  styleUrls: ['./upload-file.scss'],
  imports: [CommonModule, RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormLabelDirective, FormControlDirective, BorderDirective]
})
export class UploadFileComponent {
  constructor() {}
}