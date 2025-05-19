import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'EXCELIA'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Aplicaciones',
    url: '/aplicaciones',
    iconComponent: { name: 'cil-spreadsheet' }    
  } 
];
