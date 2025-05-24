import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsExcel } from '../../../common/functions/utils-excel';
import {
  FormControlDirective,
} from '@coreui/angular';

@Component({
  standalone: true,
  selector: 'upload-file',
  templateUrl: './upload-file.html',
  styleUrls: ['./upload-file.scss'],
  imports: [CommonModule, FormControlDirective]
})
export class UploadFileComponent {
  @Output() dataExcel = new EventEmitter<any[]>();
  
  constructor(private utilExcel: UtilsExcel) { }
  jsonData: any[] = [];

  onFileChange(event: Event): void {
    this.utilExcel.parseExcelFile(event, {
      sheetIndex: 0,                // Indice de la hoja
      headerRowIndex: 1,            // La fila 2 (índice 1)
      useHeadersAsKeys: false,      // false → array de arrays
      startColIndex: 1,             // Columna B (índice 1)
    }).then((data) => {
      this.dataExcel.emit(data);    // Mandar al Padre
    }).catch((error) => {
      console.error('Error al leer el Excel:', error);
    });
  }
}