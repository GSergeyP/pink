import type { ISubBlockImg } from '@/components/modifiers/TagsMo/TagsMo.type';

const logoURL = 'img/inform/';

const phoneData: ISubBlockImg[] = [
  {
    tags: 'subblock',
    margin: {
      d: '0 68px'
    },
    width: {
      d: '188px'
    },
    height: {
      d: '300px'
    },
    subblock: {
      tags: 'img',
      src: logoURL + 'screen1.png',
      alt: 'Pink',
      mTop: {
        d: '41px'
      },
      width: {
        d: '164px'
      },
      height: {
        d: 'auto'
      }
    },
    styles:
      'background: url(img/inform/iphone.png); background-size: cover; overflow: hidden; text-align: center;'
  },
  {
    tags: 'subblock',
    margin: {
      d: '0 68px'
    },
    width: {
      d: '188px'
    },
    height: {
      d: '300px'
    },
    subblock: {
      tags: 'img',
      src: logoURL + 'screen2.png',
      alt: 'Pink',
      mTop: {
        d: '41px'
      },
      width: {
        d: '164px'
      },
      height: {
        d: 'auto'
      }
    },
    styles:
      'background: url(img/inform/iphone.png); background-size: cover; overflow: hidden; text-align: center;'
  },
  {
    tags: 'subblock',
    margin: {
      d: '0 68px'
    },
    width: {
      d: '188px',
      t: '268px',
      m: '157px'
    },
    height: {
      d: '300px',
      t: '480px',
      m: '278px'
    },
    subblock: {
      tags: 'img',
      src: logoURL + 'screen3.png',
      alt: 'Pink',
      mTop: {
        d: '41px',
        t: '58px',
        m: '38px'
      },
      width: {
        d: '164px',
        t: '240px',
        m: '140px'
      },
      height: {
        d: 'auto'
      }
    },
    styles:
      'background: url(img/inform/iphone.png); background-size: cover; overflow: hidden; text-align: center;'
  }
];

export { phoneData };
