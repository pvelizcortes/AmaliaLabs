import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupaBaseService } from '../supabase/supabase.service'; // o tu servicio auth
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private supabase: SupaBaseService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.supabase.getUser().pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}