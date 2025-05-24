import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})

export class UtilsExcel {
  constructor() { }

  parseExcelFile(
    evt: Event,
    options: {
      sheetIndex?: number;             // Índice de la hoja a usar
      headerRowIndex?: number;         // El indice de la fila que tiene los encabezados (0-based)
      useHeadersAsKeys?: boolean;      // Si es true: JSON con claves, false: array de arrays con indices
      startColIndex?: number;          // Columna inicial (0-based)
    } = {}
  ): Promise<any[] | any[][]> {
    const {
      sheetIndex = 0,
      headerRowIndex = 0,
      useHeadersAsKeys = true,
      startColIndex = 0,
    } = options;

    return new Promise((resolve, reject) => {
      const input = evt.target as HTMLInputElement;
      if (!input?.files?.length) {
        return reject('No file selected');
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const bstr = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

          if (sheetIndex >= wb.SheetNames.length) {
            return reject('Invalid sheet index');
          }

          const wsname = wb.SheetNames[sheetIndex];
          const ws = wb.Sheets[wsname];

          const range = XLSX.utils.decode_range(ws['!ref'] || '');
          range.s.r = headerRowIndex;
          range.s.c = startColIndex;

          const data = XLSX.utils.sheet_to_json(ws, {
            header: useHeadersAsKeys ? undefined : 1,
            range,
          });

          resolve(data);
        } catch (err) {
          reject(err);
        }
      };

      reader.readAsBinaryString(input.files[0]);
    });
  }

  sumar(data: any[], claveOIndice: string | number, por: 'columna' | 'fila'): number {
    if (por === 'columna') {
      return data.reduce((acc, row) => {
        const val = parseFloat(row?.[claveOIndice] ?? '');
        return acc + (isNaN(val) ? 0 : val);
      }, 0);
    } else {
      const fila = data[claveOIndice as number] || [];
      return fila.reduce((acc: number, val: any) => {
        const n = parseFloat(val);
        return acc + (isNaN(n) ? 0 : n);
      }, 0);
    }
  }

  promediar(data: any[], claveOIndice: string | number, por: 'columna' | 'fila'): number {
    if (por === 'columna') {
      const valores = data.map(row => parseFloat(row?.[claveOIndice] ?? '')).filter(v => !isNaN(v));
      const suma = valores.reduce((acc, v) => acc + v, 0);
      return valores.length ? suma / valores.length : 0;
    } else {
      const fila = data[claveOIndice as number] || [];
      const valores = fila.map((val: any) => parseFloat(val)).filter((v: number) => !isNaN(v));
      const suma = valores.reduce((acc: number, v: number) => acc + v, 0);
      return valores.length ? suma / valores.length : 0;
    }
  }

  distinct(data: any[], claveOIndice: string | number, por: 'columna' | 'fila'): any[] {
    if (por === 'columna') {
      const valores = data.map(row => row?.[claveOIndice]).filter(v => v != null);
      return Array.from(new Set(valores));
    } else {
      const fila = data[claveOIndice as number] || [];
      return Array.from(new Set(fila.filter((v: any) => v != null)));
    }
  }
}