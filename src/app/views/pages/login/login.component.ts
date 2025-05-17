import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupaBaseService } from '../../../supabase/supabase.service'; // Ajusta ruta si es necesario
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, FormsModule]
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private supabaseService: SupaBaseService,
    private router: Router
  ) {}

  async login() {
    const { error, data } = await this.supabaseService.signIn(this.email, this.password);
    
    if (error) {
      alert('Error: ' + error.message);
      return;
    }

    // Redirige al dashboard u otra vista
    this.router.navigate(['/dashboard']);
  }
}