import type { IBlock } from '@/components/modifiers/TagsMo/TagsMo.type';

const informData: IBlock = {
  tags: 'article',
  position: 'relative',
  display: 'flex',
  fDirection: 'column',
  aItems: 'center',
  margin: {
    d: '0 auto'
  },
  width: {
    d: '1200px',
    t: '100%',
    m: '100%'
  },
  height: {
    d: '900px',
    t: '722px',
    m: '1002px'
  },
  styles: {
    d: 'background: linear-gradient(355deg, var(--smoky-white) calc(57% + 1px), var(--smoky-white) 58%, var(--white) calc(58% + 1px));',
    t: 'background: linear-gradient(355deg, var(--smoky-white) calc(61% + 1px), var(--smoky-white) 62%, var(--white) calc(62% + 1px));',
    m: 'background: linear-gradient(355deg, var(--smoky-white) calc(75% + 1px), var(--smoky-white) 76%, var(--white) calc(76% + 1px));'
  }
};

const informPhoneData: IBlock = {
  tags: 'section',
  display: {
    d: 'flex'
  },
  fDirection: {
    d: 'row'
  },
  aItems: {
    d: 'center'
  },
  mTop: {
    d: '55px',
    t: '42px',
    m: '40px'
  },
  pLeft: {
    t: 'clamp(1.25rem, -22.431rem + 57.407vw, 20.625rem)'
  },
  width: {
    t: '100%'
  },
  styles: {
    m: 'order: 3'
  }
};

const informShadowData: IBlock = {
  tags: 'section',
  display: {
    d: 'flex'
  },
  fDirection: {
    d: 'row'
  },
  aItems: {
    d: 'center'
  },
  mTop: {
    d: '-8px'
  },
  width: {
    t: '94%'
  }
};

const informInformData: IBlock = {
  tags: 'section',
  position: {
    t: 'absolute'
  },
  top: {
    t: '312px'
  },
  display: {
    d: 'flex'
  },
  fDirection: {
    d: 'row'
  },
  aItems: {
    d: 'center'
  },
  mTop: {
    d: '48px',
    m: '112px'
  },
  pLeft: {
    t: 'clamp(20.625rem, -7.639rem + 68.519vw, 43.75rem)'
  },
  width: {
    t: '100%',
    m: '280px'
  },
  styles: {
    m: 'text-align: center;'
  }
};

export { informData, informPhoneData, informShadowData, informInformData };
