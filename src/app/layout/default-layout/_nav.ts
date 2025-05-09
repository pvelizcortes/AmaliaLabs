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
    name: 'Modulos',
    url: '/blank',
    iconComponent: { name: 'cil-layers' },
    children: [
      {
        name: 'Blank',
        url: '/blank',
        icon: 'nav-icon-bullet'
      }      
    ]
  }  
];
