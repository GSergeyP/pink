import type { IImg } from '@/components/modifiers/TagsMo/TagsMo.type';

const logoURL = 'img/logo/';

const logoData: IImg = {
  tags: 'img',
  src: {
    d: logoURL + 'logo-d.png',
    t: logoURL + 'logo-t.png',
    m: logoURL + 'logo-m.png'
  },
  alt: 'Logo PINK',
  mLeft: {
    d: '130px',
    t: '20px',
    m: '20px'
  },
  mBottom: {
    d: '15px',
    t: '15px'
  },
  width: {
    d: '147px',
    t: '145px',
    m: '74px'
  },
  height: 'auto'
};

export { logoData };
