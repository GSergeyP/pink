import type { IBlock, IButton } from '@/components/modifiers/TagsMo/TagsMo.type';

const blockData: IBlock = {
  tags: 'section',
  mTop: {
    m: '37px'
  }
};

const buttonData: IButton[] = [
  {
    tags: 'button',
    variant: 'secondary',
    void: 'twitter',
    icons: {
      tags: 'icon',
      title: 'Twitter'
    }
  },
  {
    tags: 'button',
    variant: 'secondary',
    void: 'facebook',
    margin: '0 8px',
    icons: {
      tags: 'icon',
      title: 'Facebook'
    }
  },
  {
    tags: 'button',
    variant: 'secondary',
    void: 'youtube',
    pLeft: '3px',
    icons: {
      tags: 'icon',
      title: 'Youtube'
    }
  }
];

export { blockData, buttonData };
