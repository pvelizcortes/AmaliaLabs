import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { supabase } from './supabase.client';
import { BehaviorSubject, Observable } from 'rxjs'; @Injectable({
  providedIn: 'root'
})

export class SupaBaseService {

  private userSubject = new BehaviorSubject<any>(null);
  constructor(private router: Router) {    
    const session = supabase.auth.getSession().then(({ data }) => {
      this.userSubject.next(data.session?.user ?? null);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      this.userSubject.next(session?.user ?? null);
    });
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.getValue();
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  async logout(): Promise<void> {
    await supabase.auth.signOut();
    this.router.navigate(['/login']);
  }

  async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({ email: email, password: password });
  }

  // TESTING
  async testAuth() {
    const { data: user, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error al obtener el usuario:', error.message);
    } else {
      console.log('Usuario autenticado:', user);
    }
    return { user, error };
  }
}