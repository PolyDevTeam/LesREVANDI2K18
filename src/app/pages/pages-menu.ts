import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Info base',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Constantes vitale',
    icon: 'fas fa-heartbeat',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Todo List',
    icon: 'ion-clipboard',
    link: '/'
  }
];
