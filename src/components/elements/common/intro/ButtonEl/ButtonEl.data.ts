import type { IBlock, IButton } from '@/components/modifiers/TagsMo/TagsMo.type';

const blockData: IBlock = {
  tags: 'section',
  position: {
    d: 'absolute',
    t: 'absolute',
    m: 'relative'
  },
  top: {
    d: '450px',
    t: '378px',
    m: '28px'
  },
  left: {
    d: '130px',
    t: '20px'
  },
  margin: {
    m: '0 auto'
  },
  width: {
    d: '300px',
    t: '300px',
    m: '280px'
  }
};

const buttonData: IButton[] = [
  {
    tags: 'button',
    title: 'Скачать приложение',
    variant: 'primary',
    void: 'loading...',
    mBottom: {
      d: '65px',
      t: '45px',
      m: '32px'
    },
    width: {
      d: '300px',
      t: '300px',
      m: '280px'
    },
    height: {
      d: '56px',
      t: '55px',
      m: '55px'
    },
    classes: {
      d: 'button-d',
      t: 'button-t',
      m: 'button-m'
    }
  },
  {
    tags: 'button',
    variant: 'none',
    void: 'Apple',
    mLeft: {
      d: '49px',
      t: '45px'
    },
    icons: {
      tags: 'icon',
      title: 'Apple'
    }
  },
  {
    tags: 'button',
    variant: 'none',
    void: 'Android',
    mLeft: {
      d: '34px',
      t: '35px',
      m: '36px'
    },
    mRight: {
      m: '36px'
    },
    icons: {
      tags: 'icon',
      title: 'Android'
    }
  },
  {
    tags: 'button',
    variant: 'none',
    void: 'Microsoft',
    mLeft: {
      d: '34px',
      t: '35px'
    },
    icons: {
      tags: 'icon',
      title: 'Microsoft'
    }
  }
];

export { blockData, buttonData };
