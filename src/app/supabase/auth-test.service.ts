import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {
  constructor() {}

  async testAuth() {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error al obtener el usuario:', error.message);
    } else {
      console.log('Usuario autenticado:', user);
    }

    return { user, error };
  }

  async testLogin(){
    await supabase.auth.signInWithPassword({
        email: 'pabloveliz.dev@gmail.com',
        password: 'Amalita1908'
      });
  }

  async getClientes() {
    const { data, error } = await supabase
      .from('Cliente')
      .select('*');
  
    if (error) {
      console.error('Error al traer clientes:', error.message);
    } else {
      console.log('Clientes:', data);
    }
  
    return { data, error };
  }
}