import type { IImg } from '@/components/modifiers/TagsMo/TagsMo.type';

const logoURL = 'img/logo/';

const logoData: IImg = {
  tags: 'img',
  src: {
    d: logoURL + 'logo.footer.v1.png',
    t: logoURL + 'logo.footer.v2.png',
    m: logoURL + 'logo.footer.v2.png'
  },
  alt: 'Logo PINK',
  mTop: {
    m: '42px'
  },
  mBottom: {
    d: '20px',
    t: '14px'
  },
  mLeft: {
    d: '130px',
    t: '20px'
  },
  width: {
    d: '147px',
    t: '145px',
    m: '145px'
  },
  height: 'auto'
};

export { logoData };
