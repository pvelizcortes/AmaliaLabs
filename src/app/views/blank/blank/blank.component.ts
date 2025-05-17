import { Component } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    imports: [RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class BlankComponent {
  constructor() {}
 
}
