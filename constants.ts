import { PageType } from './types';

export const NAV_LINKS: { name:string; path: string }[] = [
  { name: '홈', path: '/' },
  { name: '양파 주문', path: '/onion' },
  { name: '할라피뇨 주문', path: '/jalapeno' },
  { name: '풋고추 주문', path: '/green-chili' },
];

export const ORDER_PAGE_CONFIG = {
  [PageType.Onion]: {
    title: '양파 주문서',
    formUrl: 'https://forms.gle/xXU25njLbwFDusT79',
    path: '/onion',
  },
  [PageType.Jalapeno]: {
    title: '할라피뇨 주문서',
    formUrl: 'https://forms.gle/evtuLYkonwCmKFMf9',
    path: '/jalapeno',
  },
  [PageType.GreenChili]: {
    title: '풋고추 주문서',
    formUrl: 'https://forms.gle/zdqsaVg5vnqNGZqE6', 
    path: '/green-chili',
  },
};

export const HERO_IMAGE_URL = 'https://i.postimg.cc/85N7M1Tb/hero-1.png';