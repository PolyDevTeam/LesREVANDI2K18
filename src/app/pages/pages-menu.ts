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
    link: '/pages/todo'
  },
  {
    title: 'Chat',
    icon: 'fas fa-comments',
    link: '/pages/chat'
  },
  {
    title: 'IHM 3D',
    icon: 'fa fa-binoculars',
    url: 'http://54.36.112.214/'
  },
  {
    title: 'Jeux',
    icon: 'fas fa-gamepad',
    url: 'http://54.36.112.214/FlappyOwl'
  }
];
