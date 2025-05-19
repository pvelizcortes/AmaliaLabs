import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service'; // o tu servicio auth
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean> {
  return this.loginService.getUser().pipe(
    filter(user => user !== null), // espera a que user no sea null
    take(1), // toma el primer valor válido
    map(user => {
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
    })
  );
}
}