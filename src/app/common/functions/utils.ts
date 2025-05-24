import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Utils {
  constructor() {}

  test() {
    alert('utils works');
  }
}