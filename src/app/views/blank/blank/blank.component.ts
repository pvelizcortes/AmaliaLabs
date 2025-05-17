import { Component } from '@angular/core';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';
import { SupaBaseService } from '../../../supabase/supabase.service';
import { Utils } from '../../../common/utils';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    imports: [RowComponent, ColComponent, ContainerComponent, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class BlankComponent {
  constructor(private supabaseService: SupaBaseService, private utils: Utils) {}
  async testAuth(){
    this.supabaseService.testAuth();   
  }

  async testLogin(){
    this.supabaseService.testLogin();
  }

  async getClientes(){
    this.supabaseService.getClientes();
  }

  testUtils(){
    this.utils.test();
  }
}
