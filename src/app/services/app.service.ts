import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabase.client';

@Injectable({
  providedIn: 'root'
})
export class AplicacionesService {
  constructor() { }

  async getAplicacionesPorUsuario(id: string): Promise<{ nombre: string; ruta: string, descripcion: string, fecha_creacion: Date }[]> {
    const id_auth = id;

    // 2. Obtener las apps activas del usuario
    const { data: appUserData, error: appUserError } = await supabase
      .from('App_User')
      .select('id_aplicacion')
      .eq('id_auth', id_auth)
      .eq('activo', true);

    if (appUserError || !appUserData) {
      console.error('Error al obtener apps del usuario:', appUserError);
      return [];
    }

    const idsAplicaciones = appUserData.map(app => app.id_aplicacion);

    // 3. Obtener las aplicaciones con su id_cliente
    const { data: appsData, error: appsError } = await supabase
      .from('Aplicacion')
      .select('nombre, nombre_slug, id_cliente, created_at, descripcion')
      .in('id_aplicacion', idsAplicaciones);

    if (appsError || !appsData) {
      console.error('Error al obtener aplicaciones:', appsError);
      return [];
    }

    // 4. Obtener los clientes involucrados
    const idsClientes = [...new Set(appsData.map(app => app.id_cliente))];

    const { data: clientesData, error: clientesError } = await supabase
      .from('Cliente')
      .select('id_cliente, nombre_slug')
      .in('id_cliente', idsClientes);

    if (clientesError || !clientesData) {
      console.error('Error al obtener clientes:', clientesError);
      return [];
    }

    // 5. Unir aplicaciones con clientes para armar la ruta
    const appsConRuta = appsData.map(app => {
      const cliente = clientesData.find(c => c.id_cliente === app.id_cliente);
      return {
        nombre: app.nombre,
        ruta: `/${cliente?.nombre_slug ?? 'desconocido'}/${app.nombre_slug}`,
        descripcion: app.descripcion,
        fecha_creacion: app.created_at
      };
    });

    return appsConRuta;
  }
}