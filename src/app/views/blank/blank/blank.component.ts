import { Component } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { AuthTestService } from '../../../supabase/auth-test.service';
import { Utils } from '../../../common/utils';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    imports: [RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class BlankComponent {
  constructor(private authTestService: AuthTestService, private utils: Utils) {}
  async testAuth(){
    this.authTestService.testAuth();   
  }

  async testLogin(){
    this.authTestService.testLogin();
  }

  async getClientes(){
    this.authTestService.getClientes();
  }

  testUtils(){
    this.utils.test();
  }
}
