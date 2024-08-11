import type { IImg } from '@/components/modifiers/TagsMo/TagsMo.type';

const logoURL = 'img/inform/';

const shadowData: IImg[] = [
  {
    tags: 'img',
    src: logoURL + 'shadow.png',
    alt: 'Pink',
    width: {
      d: '300px'
    },
    height: {
      d: '17px'
    },
    styles: 'z-index: 5px;'
  },
  {
    tags: 'img',
    src: logoURL + 'shadow.png',
    alt: 'Pink',
    margin: {
      d: '0 30px'
    },
    width: {
      d: '300px'
    },
    height: {
      d: '17px'
    },
    styles: 'z-index: 5px;'
  },
  {
    tags: 'img',
    src: logoURL + 'shadow.png',
    alt: 'Pink',
    width: {
      d: '300px'
    },
    height: {
      d: '17px'
    },
    styles: 'z-index: 5px;'
  }
];

export { shadowData };
