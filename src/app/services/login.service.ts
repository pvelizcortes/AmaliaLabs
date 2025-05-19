import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { supabase } from '../supabase/supabase.client';
import { BehaviorSubject, Observable } from 'rxjs'; @Injectable({
  providedIn: 'root'
})

export class LoginService {
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private router: Router) {
  supabase.auth.getSession().then(({ data }) => {
    this.userSubject.next(data.session?.user ?? null);
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    this.userSubject.next(session?.user ?? null);
  });
}

  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email: email, password: password });
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.getValue();
  }

  async logout(): Promise<void> {
    await supabase.auth.signOut();
    this.router.navigate(['/login']);
  }
  
  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }  
}