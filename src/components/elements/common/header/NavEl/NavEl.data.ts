import type { IBlock, ILink } from '@/components/modifiers/TagsMo/TagsMo.type';

const navData: IBlock = {
  tags: 'nav',
  position: {
    t: 'absolute',
    m: 'absolute'
  },
  top: {
    t: '110px',
    m: '66px'
  },
  display: 'flex',
  fDirection: {
    d: 'row',
    t: 'column',
    m: 'column'
  },
  jContent: 'center',
  aItems: 'center',
  width: {
    t: '100%',
    m: '100%'
  }
};

const linkData: ILink[] = [
  {
    to: 'home',
    title: 'главная',
    variant: 'primary',
    classes: {
      d: 'nav-d',
      t: 'nav-t',
      m: 'nav-m'
    },
    mRight: {
      d: '80px'
    },
    display: {
      t: 'flex',
      m: 'flex'
    },
    jContent: {
      t: 'center',
      m: 'center'
    },
    aItems: {
      t: 'center',
      m: 'center'
    },
    width: {
      t: '100%',
      m: '100%'
    },
    height: {
      t: '64px',
      m: '64px'
    },
    aClass: 'down',
    eaClass: 'down',
    styles: {
      d: 'text-transform: capitalize;',
      t: 'text-transform: uppercase;',
      m: 'text-transform: uppercase;'
    }
  },
  {
    to: 'photo',
    title: 'фотографии',
    variant: 'primary',
    classes: {
      d: 'nav-d',
      t: 'nav-t',
      m: 'nav-m'
    },
    mRight: {
      d: '80px'
    },
    display: {
      t: 'flex',
      m: 'flex'
    },
    jContent: {
      t: 'center',
      m: 'center'
    },
    aItems: {
      t: 'center',
      m: 'center'
    },
    width: {
      t: '100%',
      m: '100%'
    },
    height: {
      t: '64px',
      m: '64px'
    },
    aClass: 'down',
    eaClass: 'down',
    styles: {
      d: 'text-transform: capitalize;',
      t: 'text-transform: uppercase;',
      m: 'text-transform: uppercase;'
    }
  },
  {
    to: 'contest',
    title: 'конкурс',
    variant: 'primary',
    classes: {
      d: 'nav-d',
      t: 'nav-t',
      m: 'nav-m'
    },
    mRight: {
      d: '80px'
    },
    display: {
      t: 'flex',
      m: 'flex'
    },
    jContent: {
      t: 'center',
      m: 'center'
    },
    aItems: {
      t: 'center',
      m: 'center'
    },
    width: {
      t: '100%',
      m: '100%'
    },
    height: {
      t: '64px',
      m: '64px'
    },
    aClass: 'down',
    eaClass: 'down',
    styles: {
      d: 'text-transform: capitalize;',
      t: 'text-transform: uppercase;',
      m: 'text-transform: uppercase;'
    }
  },
  {
    to: 'about',
    title: 'HTML academy',
    variant: 'primary',
    classes: {
      d: 'nav-d',
      t: 'nav-t',
      m: 'nav-m'
    },
    mRight: {
      d: '129px'
    },
    display: {
      t: 'flex',
      m: 'flex'
    },
    jContent: {
      t: 'center',
      m: 'center'
    },
    aItems: {
      t: 'center',
      m: 'center'
    },
    width: {
      t: '100%',
      m: '100%'
    },
    height: {
      t: '64px',
      m: '64px'
    },
    aClass: 'down',
    eaClass: 'down',
    styles: {
      d: 'text-transform: capitalize;',
      t: 'text-transform: uppercase;',
      m: 'text-transform: uppercase;'
    }
  }
];

export { navData, linkData };
